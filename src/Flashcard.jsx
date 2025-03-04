import "./Flashcard.css";

function Flashcard({ front, back, flipped }) {
  return (
    <div className={`flashcard ${flipped ? "flipped" : ""}`}>
      <div className="flashcard-inner">
        <div className="flashcard-front">{front}</div>
        <div className="flashcard-back">{back}</div>
      </div>
    </div>
  );
}

export default Flashcard;
