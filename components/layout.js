import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Plausible Denial';
export const siteTitle = 'another next js blog';

function Navigation({ currentPage }) {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={currentPage == 'home' ? styles.active : ''}>
          <Link href="/">Blog</Link>
        </li>
        <li className={currentPage == 'about' ? styles.active : ''}>
          <Link href="/about">About</Link>
        </li>
        <li className={currentPage == 'tags' ? styles.active : ''}>
          <Link href="/tags">Tags</Link>
        </li>
      </ul>
    </nav>
  );
}

export default function Layout({ children, currentPage }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A blog about software engineering, cybersecurity, and other topics."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <>
          <div className={styles.headerBorder}>
            <div className={styles.headerBox}>
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </div>
          </div>
          <Navigation currentPage={currentPage} />
        </>
      </header>
      <main>{children}</main>
      {currentPage != 'home' && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
