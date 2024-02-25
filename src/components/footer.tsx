import Link from "next/link";
import "../app/styles/components/footer.css";

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy and Policies</Link>
          </li>
          <li>
            <Link href="/howtoplay">How to play</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
