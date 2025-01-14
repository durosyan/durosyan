import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <a
            href="https://github.com/plausible-denial/notes"
            className={styles.secondary}
          >
            Notes
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
