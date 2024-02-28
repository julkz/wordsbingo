"use client";

import React from "react";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import ToolBox from "../components/toolbox";
import HowToPlay from "@/sections/howtoplay";
import WatchYourCardImg from "../app/assets/WatchYourCardsStep.png";
import WatchAVideoImg from "../app/assets/WatchAVideoStep.png";
import FillTheWordsImg from "../app/assets/FillTheWordsStep.png";
import "./play.css";
import "../app/globals.css";

export default function Create() {
  const [cardTitle, setCardTitle] = useState("Your awesome title");
  const [cardAuthor, setCardAuthor] = useState("No author");
  const [hasGameStart, setHasGameStart] = useState(false);
  const [currentWords, setCurrentWords] = useState([""]);
  const [markedItems, setMarkedItems] = useState<number[]>([]);
  const [gridKey, setGridKey] = useState(0); // Updating the GridKey triggers a dom update
  const [showConfetti, setShowConfetti] = useState(false); // State to trigger confetti

  useEffect(() => {}, [cardTitle, cardAuthor]);

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

  const EnableText = (id: number) => {
    const gridWrapper = document.getElementsByClassName("grid")[0];
    const cell = gridWrapper.querySelector(`.gridkey-${id}`) as HTMLElement; // Cast to HTMLElement
    // Check if the cell element is found
    if (cell) {
      const paragraph = cell.querySelector("p");
      if (paragraph) {
        paragraph.style.borderBottom = "1px solid #333";
        paragraph.style.minWidth = "60px";
      }
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
          className={`grid-item ${"gridkey-" + i} ${
            markedItems.includes(i) ? "marked" : ""
          }`}
          onClick={() => HandleClick(i)}
        >
          {hasGameStart == true ? (
            <span className="textarea" role="textbox"></span>
          ) : (
            <span className="textarea" role="textbox" contentEditable></span>
          )}
        </div>
      );
    }
    return gridItems;
  };

  function handleDisableTooltip(element: HTMLElement) {
    // Traverse DOM to find the adjacent span element
    const nextSibling = element.nextElementSibling;
    console.log(element.textContent);

    // Check if the next sibling exists
    if (nextSibling) {
      // Check if the next sibling is a span element
      if (nextSibling.tagName.toLowerCase() === "span") {
        // Add the "disabled" class to the span element
        nextSibling.classList.add("disabled");
      }
    }
  }

  function handleGenerateNewWords() {
    let newWords = shuffle(currentWords).slice(0, 25); // Generate new set of words
    setCurrentWords(newWords);
    handleRestartGame();
  }

  function handleRestartGame() {
    setMarkedItems([]); // Clear marked items
    setGridKey((prevKey) => prevKey + 1); //Trigger re-draw
  }

  const HandleClick = (index: number) => {
    EnableText(index);
    if (currentWords.length < 25) {
      return;
    }
    if (markedItems.includes(index)) {
      setMarkedItems(markedItems.filter((x) => x !== index));
    } else {
      setMarkedItems((prevMarkedItems) => [...prevMarkedItems, index]);
    }
  };

  function cardHasNecessaryInfo() {
    let isValid = true;
    if (cardTitle.trim() == "") {
      //alert("Card should have a title");
      //setCardTitle("Set a Title");
      //isValid = false;
    }

    if (cardAuthor.trim() == "") {
      //setCardAuthor("Anonymous");
      // isValid = false;
    }

    return isValid;
  }

  function handleStartGame() {
    console.log("starting game");

    if (!cardHasNecessaryInfo()) {
      console.log("Card has not enough information");
      return;
    }

    console.log("Card validated, starting game...");
    var inputs = document.getElementsByClassName("textarea");
    var allWords = [];
    for (let i = 0; i < inputs.length; i++) {
      var content = inputs[i].textContent;
      if (content?.trim() != "" && content != null) {
        allWords.push(content);
      }
    }

    if (allWords.length != 25) {
      alert("Not enough words");
    } else {
      setHasGameStart(true);
      setCurrentWords(allWords);
    }
  }

  return (
    <div className="PageWrapper mt-5 text-center mx-auto">
      <div className="inputwrapper primaryFont">
        <input
          className="h3"
          value={cardTitle} // ...force the input's value to match the state variable...
          onChange={(e) => setCardTitle(e.target.value)} // ... and update the state variable on any edits!
          onClick={() => handleDisableTooltip(event.target)}
        />
        {hasGameStart ? "" : <span>Update your Title!</span>}
      </div>

      <div className="inputwrapper primaryFont">
        <input
          className="h4"
          value={cardAuthor} // ...force the input's value to match the state variable...
          onChange={(e) => setCardAuthor(e.target.value)} // ... and update the state variable on any edits!
          onClick={() => handleDisableTooltip(event.target)}
        />
        {hasGameStart ? "" : <span>Give it your name!</span>}
      </div>

      <div className="grid-wrapper w-full mx-auto mt-5 noSelect">
        <div className="grid grid-cols-5 mt-1 gameFont" key={gridKey}>
          {renderGrid()}
        </div>

        {hasGameStart ? (
          ""
        ) : (
          <button
            className="btn startGame"
            onClick={() => {
              handleStartGame();
            }}
          >
            Start Game
          </button>
        )}
      </div>
      <HowToPlay
        classNames={["mt-3"]}
        imageOne={WatchYourCardImg.src}
        imageTwo={WatchAVideoImg.src}
        imageThree={FillTheWordsImg.src}
      />
      <ToolBox
        RestartGame={handleRestartGame}
        GenerateNewWords={handleGenerateNewWords}
        showRestartIcon={hasGameStart}
        showGenerateIcon={hasGameStart}
      />
      {showConfetti && <Confetti tweenDuration={20} />}
    </div>
  );
}
