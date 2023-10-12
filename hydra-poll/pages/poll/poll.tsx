import React, { useState } from 'react';

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

  const handleVote = (optionId: number) => {
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





