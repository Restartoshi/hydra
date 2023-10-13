import React, { useState, useEffect, useRef } from 'react'
import { Blockfrost, Lucid, Network } from "lucid-cardano"

interface Option {
  id: number
  text: string
  votes: number
}

const HydraPoll: React.FC = () => {
  const [options, setOptions] = useState<Option[]>([
    { id: 1, text: 'Option 1', votes: 0 },
    { id: 2, text: 'Option 2', votes: 0 },
    { id: 3, text: 'Option 3', votes: 0 },
  ])

  // WebSocket connection using useRef
  const ws = useRef<WebSocket | null>(null)
  const lucid = useRef<Lucid | null>(null)
  const lucidLoaded = useRef(false)

  // Function to send a vote message through WebSocket
  const handleVote = async (optionId: number) => {
    if (ws.current && lucid.current) {
      console.log('User voted for Option:', optionId)
      const utxos = await getUTxO();
      console.log("head utxos", utxos)
      const result = await buildTx(optionId)
      console.log(result);
      ws.current.send(result)
    }
  }
  const getUTxO = async function(){
    ws.current.send(JSON.stringify({"tag":"GetUTxO"}));
  }

  const buildTx = async function (voteOption: number) {
    if (lucid.current) {
      const tx = await lucid.current.newTx()
                            .payToAddress("addr_test1vp5cxztpc6hep9ds7fjgmle3l225tk8ske3rmwr9adu0m6qchmx5z", { lovelace: 0n })
                            .attachMetadata(1, { msg: voteOption})
                            .complete()
      const signedTx = await tx.sign().complete()
      console.log(signedTx.toString());
      const messageToSend = JSON.stringify({"tag": "NewTx", "transaction": signedTx.toString()})
      console.log(messageToSend);
      return messageToSend;
    } else {
      console.error("Cant build tx due to missing Lucid instance")
    }
  }

  useEffect(() => {
    const initLucid = async () => {
      lucid.current = await Lucid.new(
          new Blockfrost("https://cardano-preprod.blockfrost.io/api/v0", "preprodjH10USUsLVtvpIGL1lWV25JJtC6EOpqn"),
          "Preprod",
        );

       const namiEnabled = await window.cardano.nami.isEnabled();

       if (!namiEnabled) {
         const nami = await window.cardano.nami.enable();
         lucid.current.selectWallet(nami);
       }
    }

    if (!lucidLoaded.current){
      initLucid();
    }

    return () => {
      lucidLoaded.current = true;
    }
  }, [])

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:4001') // Replace with your WebSocket server address

    ws.current.addEventListener('message', (event) => {
      // Handle incoming messages here
      console.log('Received message:', event.data)

      // Assuming the server responds with a message like "Vote for Option X accepted"
      const match = event.data.match(/Vote for Option (\d+) accepted/)
      if (match) {
        const optionId = parseInt(match[1], 10)
        updateVoteCount(optionId)
      }
    })


    return () => {
      if (ws.current) {
        ws.current.close()
      }
    }
  }, [])

  const updateVoteCount = (optionId: number) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === optionId
          ? { ...option, votes: option.votes + 1 }
          : option
      )
    )
  }

  return (
    <div className="hydra-poll">
      <h1 className="title">
        <a href="https://hydra.family">Hydra </a>Poll
      </h1>
      <div className="options-container">
        {options.map((option) => (
          <div className="option" key={option.id}>
            <p>{option.text}</p>
            <p>Votes: {option.votes}</p>
            <button onClick={() => handleVote(option.id)}>Vote</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HydraPoll
