import "../app/styles/pages/howtoplay.css";

export default function HowToPlay() {
  return (
    <div className="PageWrapper text-center howtoplayWrapper">
      <section>
        <h3>How to play</h3>
        <p>
          Welcome to WordsBingo! Whether youre a seasoned Bingo player or a
          newcomer to the game, heres a quick guide on how to play:
        </p>
        <section className="howtoplaysection">
          <h4>Objective</h4>
          <p>
            The objective of WordsBingo is to mark off words on your Bingo card
            as they are called out. The goal is to complete a line (horizontal,
            vertical, or diagonal) on your card before anyone else to win.
          </p>

          <h4>Mark Your Free Space</h4>
          <p>
            In the center of each Bingo card is a designated free space. This
            space is automatically marked for you at the beginning of the game.
          </p>

          <h4>Prepare Your Mind</h4>
          <p>Get ready to tap or click on the words as theyre called.</p>
        </section>
      </section>

      <section>
        <h3>Gameplay</h3>
        <p>
          The game host will announce words as they happen in the video of
          choice. These words will should to the ones on your Bingo card.
        </p>
        <section className="howtoplaysection">
          <h4>Call Out Words</h4>
          <p>
            The objective of WordsBingo is to mark off words on your Bingo card
            as they are called out. The goal is to complete a line (horizontal,
            vertical, or diagonal) on your card before anyone else to win.
          </p>

          <h4>Mark Off Words</h4>
          <p>
            As each word is called out, check your Bingo card. If you see the
            word, mark it off using your dauber or by tapping/clicking on it.
          </p>

          <h4>Complete a Line</h4>
          <p>
            The goal is to complete a line of marked-off words on your card
            before anyone else. Lines can be horizontal, vertical, or diagonal.
          </p>

          <h4>Call Bingo!</h4>
          <p>
            If you complete a line, shout &quot;Bingo!&quot;. The game host will
            automaticly verify your card to confirm your win.
          </p>

          <h4>Continue Playing</h4>
          <p>
            If no one has called Bingo yet, continue playing until someone does.
          </p>
        </section>
      </section>
    </div>
  );
}
