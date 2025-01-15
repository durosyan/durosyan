import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm a passionate IT professional with experience in software engineering and cybersecurity, as well as diverse roles like 999 emergency call handler and bartender. I'm eager to advance my IT career, actively learning with Hack The Box, and aiming for my CompTIA Security+ certification. In my spare time, I enjoy bouldering, hiking, and volunteering with the British Mountaineering Council, and hold certifications in CompTIA A+, AWS Developer Associate, and Microsoft Azure Fundamentals.</p>
      </section>
    </Layout>
  );
}
