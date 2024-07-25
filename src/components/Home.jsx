import "../styles/Wordle.scss";
import React, { useState } from "react";
import Wordle from "./Wordle";
import WordleSeven from "./WordleSeven";
import WordleSix from "./WordleSix";
import { fiveLetters, sixLetters, sevenLetters } from "../data/words";

export default function Home() {
  const [currentBoard, setBoard] = useState(1);
  const setMode = (param) => {
    setBoard(param);
  };
  const SOLUTION = [
    fiveLetters[Math.floor(Math.random() * fiveLetters.length)],
    sixLetters[Math.floor(Math.random() * sixLetters.length)],
    sevenLetters[Math.floor(Math.random() * sevenLetters.length)],
  ];

  return (
    <div>
      {currentBoard == 1 && <HomePage setMode={setMode} />}
      {currentBoard == 5 && <Wordle setMode={setMode} SOLUTION={SOLUTION[0]} />}
      {currentBoard == 6 && (
        <WordleSix setMode={setMode} SOLUTION={SOLUTION[1]} />
      )}
      {currentBoard == 7 && (
        <WordleSeven setMode={setMode} SOLUTION={SOLUTION[2]} />
      )}
    </div>
  );
}
const HomePage = ({ setMode }) => {
  return (
    <div className="wordle">
      <h1 className="title">Wordle Clone</h1>
      <h1 className="homeTitle">
        Welcome to <span className="wordleTitle">Wordle</span>{" "}
        <span className="reactTitle">React</span>
      </h1>
      <h2 className="title">Please Select the Level of Difficulty</h2>
      <button className="button1" onClick={() => setMode(5)}>
        Normal <div className="homeLetter">5 letters</div>
      </button>
      <button className="button2" onClick={() => setMode(6)}>
        Hard<div className="homeLetter">6 letters</div>
      </button>
      <button className="button3" onClick={() => setMode(7)}>
        Genius
        <div className="homeLetter">7 letters</div>
      </button>
    </div>
  );
};
