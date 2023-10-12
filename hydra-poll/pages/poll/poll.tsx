import React, { useState, useEffect, useRef } from 'react';

interface Option {
  id: number;
  text: string;
  votes: number;
}

const HydraPoll: React.FC = () => {
  const [options, setOptions] = useState<Option[]>([
    { id: 1, text: 'Option 1', votes: 0 },
    { id: 2, text: 'Option 2', votes: 0 },
    { id: 3, text: 'Option 3', votes: 0 },
  ]);

  // WebSocket connection using useRef
  const ws = useRef<WebSocket | null>(null);

  // Function to send a vote message through WebSocket
  const handleVote = (optionId: number) => {
    if (ws.current) {
      const message = `User voted for Option ${optionId}`;
      console.log('Sending message:', message);
      ws.current.send(message);
    }
  };

  useEffect(() => {
    // Create a new WebSocket connection
    ws.current = new WebSocket('ws://localhost:5001'); // Replace with your WebSocket server address

    ws.current.addEventListener('message', (event) => {
      // Handle incoming messages here
      console.log('Received message:', event.data);

      // Assuming the server responds with a message like "Vote for Option X accepted"
      const match = event.data.match(/Vote for Option (\d+) accepted/);
      if (match) {
        const optionId = parseInt(match[1], 10);
        updateVoteCount(optionId);
      }
    });

    return () => {
      // Close the WebSocket connection on unmount
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []); // Empty dependency array to run this effect only once

  const updateVoteCount = (optionId: number) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === optionId
          ? { ...option, votes: option.votes + 1 }
          : option
      )
    );
  };

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
  );
};

export default HydraPoll;
