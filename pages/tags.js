import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getAllTags } from '../lib/posts';
import { getRandomColor } from '../lib/colour';

export default function Tags({ allTags }) {
    return (
        <Layout currentPage={'tags'}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <div className={utilStyles.chipContainer}>
                    {allTags.map(({ tag }) => (
                        <Link href={`/tags/${tag}`} key={tag}>
                            <span className={utilStyles.chip} style={{ backgroundColor: getRandomColor() }}>
                                <p>{tag}</p>
                            </span>
                        </Link>
                    ))}
                </div>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const allTags = getAllTags();
    return {
        props: {
            allTags,
        },
    };
}
