import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/index.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

function searchPosts(query, allPostsData) {
  const lowerCaseQuery = query.toLowerCase();

  return allPostsData.filter(post => {
    const title = post.title.toLowerCase();
    const tags = post.tags.map(tag => tag.toLowerCase());
    return title.includes(lowerCaseQuery) || tags.some(tag => tag.includes(lowerCaseQuery));
  });
}

export default function Home({ allPostsData }) {
  const [filteredPosts, setFilteredPosts] = React.useState(allPostsData);

  return (
    <Layout currentPage={'home'}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Link href="/about" className={styles.aboutLink}>?</Link>

      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search posts"
          onChange={(e) => setFilteredPosts(searchPosts(e.target.value, allPostsData))}
        />
      </div>

      <section>
        <ul className={styles.list}>
          {filteredPosts.map(({ id, date, title, tags }) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={styles.lightText}>
                <Date dateString={date} />
              </small>
              <br />
              <div className={styles.tags}>
                {tags.map((tag) => (
                  <small key={tag}>
                    <Link href={`/tags/${tag}`}>{tag}</Link>
                  </small>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
