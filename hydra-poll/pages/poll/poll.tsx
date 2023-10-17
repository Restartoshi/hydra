import React, { useState, useEffect, useRef } from 'react'
import { Blockfrost, Lucid, Network } from "lucid-cardano"
interface Option {
  id: number
  text: string
  votes: number
}

const HydraPoll: React.FC = () => {
  const [options, setOptions] = useState<Option[]>([
    { id: 1, text: 'Incremental commits/decommits', votes: 0 },
    { id: 2, text: 'Dynamic Hydra Parties', votes: 0 },
    { id: 3, text: 'Interconnected Hydra Heads', votes: 0 },
  ])

  // WebSocket connection using useRef
  const ws = useRef<WebSocket | null>(null)

  // Function to send a vote message through WebSocket
  const handleVote = async (optionId: number) => {
    fetch("http://localhost:1337/poll/" + optionId, {"mode": "no-cors"})
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
  }

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:4001') // Replace with your WebSocket server address

    ws.current.addEventListener('message', (event) => {

      const metadataLabel = 14;
      let msg = JSON.parse(event.data);
      if (msg.tag == "TxValid") {

      if (msg.transaction.auxiliaryData != null) {
        console.log("Transaction has auxiliary data", msg.transaction.auxiliaryData);
        const aux = cbor.decodeFirstSync(msg.transaction.auxiliaryData).value;
        const voteOption = (aux.get(0) || aux.get(1)).get(metadataLabel);
        updateVoteCount(voteOption)
      }
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
