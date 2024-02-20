"use client";

import React from "react";
import "../app/styles/components/toolbox.css";

import homeIcon from "../app/assets/home.svg";
import infoIcon from "../app/assets/info.svg";
import restartIcon from "../app/assets/restart.svg";
import newIcon from "../app/assets/new.svg";
import Link from "next/link";

type ToolBoxProps = {
  RestartGame: () => void;
  GenerateNewWords: () => void;
  showHomeIcon?: boolean;
  showInfoIcon?: boolean;
  showRestartIcon?: boolean;
  showGenerateIcon?: boolean;
};

const Toolbox: React.FunctionComponent<ToolBoxProps> = ({ ...props }) => {
  const {
    RestartGame,
    GenerateNewWords,
    showHomeIcon = true,
    showInfoIcon = true,
    showRestartIcon = true,
    showGenerateIcon = true,
  } = props;

  return (
    <div className="toolbox-wrap">
      {showHomeIcon ? (
        <div className="toolbox-item">
          <span>Return Home</span>
          <Link href={"/"}>
            <img src={homeIcon.src} alt="Return home" />
          </Link>
        </div>
      ) : (
        <></>
      )}

      {showInfoIcon ? (
        <div className="toolbox-item">
          <span>
            Welcome to WordsBingo! Watch videos and mark the corresponding
            action words on your Bingo Card. Interact with your friends as you
            try to complete a line to win!
          </span>
          <img src={infoIcon.src} alt="Informaçoes sobre o jogo" />
        </div>
      ) : (
        <></>
      )}

      {showRestartIcon ? (
        <div className="toolbox-item" onClick={() => RestartGame()}>
          <span>Restart Game</span>
          <img src={restartIcon.src} alt="Limpar os cartoes pré assinalados" />
        </div>
      ) : (
        <></>
      )}

      {showGenerateIcon ? (
        <div className="toolbox-item" onClick={() => GenerateNewWords()}>
          <span>Generate new Card</span>
          <img src={newIcon.src} alt="Generate a new card with new words." />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Toolbox;
