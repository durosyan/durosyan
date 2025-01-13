import Image from "next/image";
import styles from "./page.module.css";
import nextSvg from "../assets/image.svg";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src={nextSvg}
          alt="Feasable Denial Logo"
          width={180}
          height={180}
          priority
        />
        <ul>
          <li>
            Hello i'm <code>Ryan</code>
          </li>
          <li>This is my personal page</li>
        </ul>

        <div className={styles.ctas}>
          <a
            href="https://github.com/FeasableDenial/notes"
            className={styles.secondary}
          >
            Read my notes
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        {/* <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Blog
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Profiles
        </a> */}
      </footer>
    </div>
  );
}
