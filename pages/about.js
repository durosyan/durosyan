import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function About() {
  return (
    <Layout currentPage={'about'}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm a passionate IT professional with experience in software engineering and cybersecurity.</p>
        <p>My goal is to become a cybersecurity professional, and I'm currently studying for my CompTIA Security+ certification.</p>
        <p>In my spare time, I enjoy bouldering, hiking, and volunteering with the <a href='https://www.thebmc.co.uk/en/get-involved-volunteering'>British Mountaineering Council.</a></p>
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
