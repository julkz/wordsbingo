"use client";
import Link from "next/link";
import AboutUs from "../sections/aboutus";
import HowToPlay from "../sections/howtoplay";
import PickACategoryStepImg from "../app/assets/PickACategoryStep.png";
import PickAVideoStepImg from "../app/assets/PickAVideoStep.png";
import HaveFunStepImg from "../app/assets/HaveFunStep.png";
import "./styles/page.css";

export default function Home() {
  return (
    <>
      <section className="banner">
        <h3>WordsBingo</h3>
        <p className="description">Pick a themed card or a random one.</p>
        <nav className="heroNav">
          <ul>
            <li>
              <Link
                className="btn"
                href={{ pathname: "/play", query: { id: "random" } }}
              >
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
      <HowToPlay
        classNames={""}
        imageOne={PickACategoryStepImg.src}
        imageTwo={PickAVideoStepImg.src}
        imageThree={HaveFunStepImg.src}
      ></HowToPlay>
      <AboutUs></AboutUs>
    </>
  );
}
