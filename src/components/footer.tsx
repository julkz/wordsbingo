import Link from "next/link";

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
          {/* <li>
            <Link href="/about">About Us</Link>
          </li> */}
        </ul>
      </nav>
    </footer>
  );
}
