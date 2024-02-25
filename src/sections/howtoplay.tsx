import "./howtoplay.css";

interface props {
  classNames?: string[];
  imageOne: string;
  imageTwo: string;
  imageThree: string;
}

export default function HowToPlay({
  classNames,
  imageOne,
  imageTwo,
  imageThree,
}: props) {
  return (
    <section className={"PageWrapper " + classNames}>
      <h4>How to play ?</h4>
      <section className="howToPlayBanner">
        <article>
          <img src={imageOne} alt="Pick a category" />
        </article>
        <article>
          <img src={imageTwo} alt="Select a video"></img>
        </article>
        <article>
          <img src={imageThree} alt="Have fun" />
        </article>
      </section>
    </section>
  );
}
