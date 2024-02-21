"use client";

import React from "react";
import Link from "next/link";
import ToolBox from "../components/toolbox";
import "../app/styles/pages/cards.css";
import { AllCards } from "../app/assets/Cards/Cards";

export default function Cards() {
  return (
    <section className="PageWrapper">
      <h4>Community cards</h4>
      <p className="text-center">
        Created with love by our players around the world!
      </p>

      <nav className="nav">
        <ul>
          {AllCards.map((card) => (
            <li>
              <Link
                className="btn"
                href={{ pathname: "/play", query: { id: card.id } }}
              >
                {card.Name}
                <p>Created by: {card.author}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ToolBox
        GenerateNewWords={() => {}}
        RestartGame={() => {}}
        showInfoIcon={false}
        showRestartIcon={false}
        showGenerateIcon={false}
      />
    </section>
  );
}
