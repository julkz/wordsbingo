"use client";

import React from "react";
import Link from "next/link";
import ToolBox from "../components/toolbox";
import "../app/styles/pages/cards.css";

export default function Cards() {
  return (
    <section className="PageWrapper">
      <h4>Community cards</h4>
      <p className="text-center">
        Created with love by our players around the world!
      </p>

      <nav className="nav">
        <ul>
          <li>
            <Link
              className="btn"
              href={{ pathname: "/play", query: { theme: "wuantedition" } }}
            >
              WUANT edition
              <p>Created by: Author name</p>
            </Link>
          </li>
          <li>
            <Link className="btn" href="/cards">
              Whidow EditTIon
              <p>Created by: Author name</p>
            </Link>
          </li>

          <li>
            <Link className="btn" href="/cards">
              Nuno Santos
              <p>Created by: Author name</p>
            </Link>
          </li>

          <li>
            <Link className="btn" href="/cards">
              LEGenzed Boyz
              <p>Created by: Author name</p>
            </Link>
          </li>

          <li>
            <Link className="btn" href="/cards">
              MoraisHD
              <p>Created by: Author name</p>
            </Link>
          </li>

          <li>
            <Link className="btn" href="/cards">
              PewDiePie
              <p>Created by: Author name</p>
            </Link>
          </li>

          <li>
            <Link className="btn" href="/cards">
              IShowSpeed
              <p>Created by: Author name</p>
            </Link>
          </li>
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
