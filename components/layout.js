import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';

const name = 'Pl4us1bleD3n1al';
export const siteTitle = 'Notes for the future';

function Navigation({ currentPage }) {
  return (
    <></>
    // <nav className={styles.nav}>
    //   <ul>
    //     <Link href="/">
    //       <li className={currentPage == 'home' ? styles.active : ''}>
    //         Blog
    //       </li>
    //     </Link>
    //     <Link href="/about">
    //       <li className={currentPage == 'about' ? styles.active : ''}>
    //         About
    //       </li>
    //     </Link>
    //     <Link href="/tags">
    //       <li className={currentPage == 'tags' ? styles.active : ''}>
    //         Tags
    //       </li>
    //     </Link>
    //   </ul>
    // </nav>
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
        <Navigation currentPage={currentPage} />
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
