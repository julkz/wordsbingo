"use client";
import Link from "next/link";
import Footer from "@/components/footer";
import "./styles/page.css";

export default function Home() {
  return (
    <>
      <section className="banner">
        <h3>WordsBingo</h3>
        <p className="description">Customize your card or pick a random one.</p>
        <nav className="nav">
          <ul>
            <li>
              <Link className="btn" href="/play">
                Random Card
              </Link>
            </li>
            <li>
              <Link className="btn" href="/cards">
                Community Cards
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="howToPlay">
        <h4>How to play ?</h4>
      </section>
      <Footer />
    </>
  );
}
