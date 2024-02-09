"use client";

import React from "react";
import "../app/styles/components/toolbox.css";

import infoIcon from "../app/assets/info.svg";
import restartIcon from "../app/assets/restart.svg";
import newIcon from "../app/assets/new.svg";

type ToolBoxProps = {
  RestartGame(): void;
  GenerateNewWords(): void;
};

const Toolbox: React.FunctionComponent<ToolBoxProps> = ({ ...props }) => {
  const { RestartGame, GenerateNewWords } = props;

  return (
    <div className="toolbox-wrap">
      <div className="toolbox-item">
        <span>
          Bem-vindo ao Video &apos;Bingo&apos;! Assista a vídeos ou Reels e
          marque as palavras de ação correspondentes nos seus cartões Bingo.
          Desfrute de diversão interativa enquanto tenta completar linhas ou
          diagonais para vencer.
        </span>
        <img src={infoIcon.src} alt="Informaçoes sobre o jogo" />
      </div>
      <div className="toolbox-item" onClick={() => RestartGame()}>
        <span>Reinicar jogo</span>
        <img src={restartIcon.src} alt="Limpar os cartoes pré assinalados" />
      </div>
      <div className="toolbox-item" onClick={() => GenerateNewWords()}>
        <span>Gerar novas palavras</span>
        <img src={newIcon.src} alt="Gerar um cartao com novas palavras" />
      </div>
    </div>
  );
};

export default Toolbox;
