import Link from "next/link";
import ToolBox from "../components/toolbox";
import { AllCards } from "../app/assets/Cards/Cards";
import "../app/styles/pages/cards.css";

export default function Cards() {
  return (
    <section className="PageWrapper">
      <h4>Community cards</h4>
      <p className="text-center">Pick one that fits you the most!</p>
      <nav className="nav">
        <ul>
          {AllCards.map((card) => (
            <li key={card.id}>
              <a className="btn" href={"/play/?id=" + card.id}>
                {card.Name}
              </a>
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
