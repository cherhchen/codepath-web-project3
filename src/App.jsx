import { useState } from "react";
import "./App.css";
import Flashcard from "./Flashcard";
import vocab from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const [isFront, setIsFront] = useState(true);
  const [answer, setAnswer] = useState("");
  const [answerStatus, setAnswerStatus] = useState("");
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const handlePrev = () => {
    if (index !== 0) {
      setIndex(index - 1);
      setIsFront(true);
      setAnswerStatus("");
      setAnswer("");
    }
  };

  const handleNext = () => {
    if (index !== vocab.length - 1) {
      setIndex(index + 1);
      setIsFront(true);
      setAnswerStatus("");
      setAnswer("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer == vocab[index]["answer"]) {
      setAnswerStatus("correct");
      // Use functional updates when multiple state updates happen in the same function
      setCurrentStreak((prevStreak) => {
        const newStreak = prevStreak + 1;
        setLongestStreak((prevLongest) => Math.max(prevLongest, newStreak));
        return newStreak;
      })
    }
    else {
      setAnswerStatus("incorrect");
      setCurrentStreak(0);
    }
  }

  return (
    <>
      <h1>Chinese Flashcards</h1>
      <h2>Learn some basic Chinese vocabulary</h2>
      <p>Current Streak: {currentStreak}, Longest Streak: {longestStreak}</p>
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
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <p>Enter you answer: </p>
          <input 
            type="text" 
            value={answer} 
            onChange={(e) => setAnswer(e.target.value)}
            className="input"
          />
          <button type="submit">Submit Answer</button>
        </div>
      </form>
      <div className="answer-status">
        {
          answerStatus && 
          <p className={answerStatus === "correct" ? "correct" : "incorrect"}>
            {answerStatus === "correct" ? "Correct!" : "Incorrect!"}
          </p>
        }
      </div>
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
