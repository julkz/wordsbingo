"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Confetti from "react-confetti";
import ToolBox from "../components/toolbox";
import CardService from "../services/CardService";
import FetchClient from "../ServiceClients/FetchClient";
import HowToPlay from "@/sections/howtoplay";
import WatchYourCardImg from "../app/assets/WatchYourCardsStep.png";
import WatchAVideoImg from "../app/assets/WatchAVideoStep.png";
import FillTheWordsImg from "../app/assets/FillTheWordsStep.png";
import "./play.css";
import "../app/globals.css";

interface Card {
  Name: string;
}

export default function Play() {
  const [currentCard, setCurrentCard] = useState<Card>({ Name: "" });
  const [currentWords, setCurrentWords] = useState([""]);
  const [markedItems, setMarkedItems] = useState<number[]>([]);
  const [gridKey, setGridKey] = useState(0); // Updating the GridKey triggers a dom update
  const [showConfetti, setShowConfetti] = useState(false); // State to trigger confetti

  const cardService = new CardService(FetchClient);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams !== null) {
      const cardId = searchParams.get("id") ?? "random";
      const fetchCard = async () => {
        let card;
        try {
          if (cardId == "random") {
            card = await cardService.getRandomCard();
          } else {
            card = await cardService.getCard(cardId);
          }
          setCurrentCard(card);
          setCurrentWords(shuffle(card.words).slice(0, 25));
        } catch (error) {
          //console.log(error);
        }
      };
      fetchCard();
    }
  }, [searchParams]); // Fetch when searchParams changes

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
      <h3>{currentCard.Name}</h3>
      <h4>WordsBingo</h4>

      <div className="grid-wrapper w-full mx-auto mt-5 noSelect">
        <div className="grid grid-cols-5 mt-1 gameFont" key={gridKey}>
          {renderGrid()}
        </div>
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
      />
      {showConfetti && <Confetti tweenDuration={20} />}
    </div>
  );
}
