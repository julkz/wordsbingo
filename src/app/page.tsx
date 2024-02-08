"use client";
import React from "react";
import Link from "next/link";

import "./styles/page.css";

export default function Home() {
  return (
    <div className="banner">
      <p className="title">VideoBingo</p>
      <div className="btn">
        <Link href="/play">Play</Link>
      </div>
      <div className="text-box">
        <p>Um mini game/projecto feito em React! Diverte-te.</p>
      </div>
    </div>
  );
}
