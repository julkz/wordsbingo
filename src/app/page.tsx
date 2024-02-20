"use client";
import Link from "next/link";
import Footer from "@/components/footer";
import "./styles/page.css";

export default function Home() {
  return (
    <>
      <section className="banner">
        <h3>WordsBingo</h3>
        <nav className="nav">
          <Link className="btn" href="/play">
            Play
          </Link>
        </nav>
      </section>
      <Footer />
    </>
  );
}
