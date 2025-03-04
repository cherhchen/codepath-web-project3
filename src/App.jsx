import { useState } from "react";
import "./App.css";
import Flashcard from "./Flashcard";
import vocab from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const [isFront, setIsFront] = useState(true);

  const handlePrev = () => {
    if (index !== 0) {
      setIndex(index - 1);
      setIsFront(true);
    }
  };

  const handleNext = () => {
    if (index !== vocab.length - 1) {
      setIndex(index + 1);
      setIsFront(true);
    }
  };

  return (
    <>
      <h1>Chinese Flashcards</h1>
      <h2>Learn some basic Chinese vocabulary</h2>
      <div className="flashcard-container" onClick={() => setIsFront(!isFront)}>
        <Flashcard
          front={vocab[index]["question"]}
          back={vocab[index]["answer"]}
          image={vocab[index]["image"]}
          flipped={!isFront}
        />
      </div>
      <p>
        {index + 1} / {vocab.length}
      </p>
      <div className="button-container">
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className={index === 0 ? "card-button-disabled" : "card-button"}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={index === vocab.length - 1}
          className={index === vocab.length - 1 ? "card-button-disabled" : "card-button"}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
