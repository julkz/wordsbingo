import PickACategoryStepImg from "../app/assets/PickACategoryStep.png";
import PickAVideoStepImg from "../app/assets/PickAVideoStep.png";
import HaveFunStepImg from "../app/assets/HaveFunStep.png";
import "./howtoplay.css";

export default function HowToPlay({ classNames }) {
  return (
    <section className={"PageWrapper " + classNames}>
      <h4>How to play ?</h4>
      <section className="howToPlayBanner">
        <article>
          <img src={PickACategoryStepImg.src} alt="Pick a category" />
        </article>
        <article>
          <img src={PickAVideoStepImg.src} alt="Select a video"></img>
        </article>
        <article>
          <img src={HaveFunStepImg.src} alt="Have fun" />
        </article>
      </section>
    </section>
  );
}
