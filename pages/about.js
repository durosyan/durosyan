import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/about.module.css';
import Link from 'next/link';
import Github from '../icons/github.svg';
import Htb from '../icons/hackthebox.svg';
import LinkedIn from '../icons/linkedin.svg';

export default function About() {
  return (
    <Layout currentPage={'about'}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.icons}>
        <Link href={'https://github.com/durosyan'}><Github className={styles.githubIcon} /></Link>
        <Link href={'https://app.hackthebox.com/profile/964011'}><Htb className={styles.htbIcon} /></Link>
        <Link href={'https://www.linkedin.com/in/#'}><LinkedIn className={styles.linkedinIcon} /></Link>
      </section>
      <section className={styles.about}>
        <p>The purpose of this blog is to:</p>
        <ol>
          <li>Document my learning journey</li>
          <li>Share my experiences</li>
          <li>Help others</li>
        </ol>
      </section>
    </Layout>
  );
}
