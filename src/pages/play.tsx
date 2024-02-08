"use client";

import React from "react";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "../app/styles/pages/play.css";
import "../app/globals.css";

import { AllWords } from "../app/assets/words/words";
import ToolBox from "../components/toolbox";
import backIcon from "../app/assets/back.svg";

export default function Play() {
  const [currentWords, setCurrentWords] = useState([...AllWords]);
  const [markedItems, setMarkedItems] = useState<number[]>([]);
  const [gridKey, setGridKey] = useState(0); // Updating the GridKey triggers a dom update
  const [showConfetti, setShowConfetti] = useState(false); // State to trigger confetti

  useEffect(() => {
    setCurrentWords(shuffle(AllWords).slice(0, 25));
  }, []);

  useEffect(() => {
    if (CheckWinningPattern()) {
      setShowConfetti(true);
    } else {
      setShowConfetti(false);
    }
  }, [markedItems]);

  let shuffle = (array: string[]) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const HandleClick = (index: number) => {
    if (markedItems.includes(index)) {
      setMarkedItems(markedItems.filter((x) => x !== index));
    } else {
      setMarkedItems((prevMarkedItems) => [...prevMarkedItems, index]);
    }
  };

  function CheckWinningPattern() {
    const rows = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
    ];

    const columns = [
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
    ];

    const diagonals = [
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
    ];

    // Check for a row match
    for (const row of rows) {
      const allMarked = row.every((item) => markedItems.includes(item));
      if (allMarked) {
        return true;
      }
    }

    // Check for a column match
    for (const column of columns) {
      const allMarked: any = column.every((item) => markedItems.includes(item));
      if (allMarked) {
        return true;
      }
    }

    // Check for a diagonal match
    for (const diagonal of diagonals) {
      const allMarked = diagonal.every((item) => markedItems.includes(item));
      if (allMarked) {
        return true;
      }
    }

    return false;
  }

  const renderGrid = () => {
    const gridItems = [];
    for (let i = 0; i < 25; i++) {
      gridItems.push(
        <div
          key={`grid-item-${i}`}
          className={`grid-item ${markedItems.includes(i) ? "marked" : ""}`}
          onClick={() => HandleClick(i)}
        >
          <p>{currentWords[i]}</p>
        </div>
      );
    }
    return gridItems;
  };

  function handleGenerateNewWords() {
    let newWords = shuffle(currentWords).slice(0, 25); // Generate new set of words
    setCurrentWords(newWords);
    handleRestartGame();
  }

  function handleRestartGame() {
    setMarkedItems([]); // Clear marked items
    setGridKey((prevKey) => prevKey + 1); //Trigger re-draw
  }

  return (
    <div className="PageWrapper mt-5 text-center mx-auto">
      <h1>VideoBingo</h1>

      <div className="back-btn" onClick={() => history.back()}>
        <img src={backIcon.src} alt="Go back" />
      </div>

      <div className="grid-wrapper mt-8  w-full mx-auto mt-5">
        <div className="grid grid-cols-5 mt-1" key={gridKey}>
          {renderGrid()}
        </div>
      </div>
      <ToolBox
        RestartGame={handleRestartGame}
        GenerateNewWords={handleGenerateNewWords}
      />
      {showConfetti && <Confetti tweenDuration={20} />}
    </div>
  );
}
