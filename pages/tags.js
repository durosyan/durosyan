import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import aboutStyles from '../styles/about.module.css';
import { getAllTags } from '../lib/tags';
import { getRandomColor } from '../lib/colour';

export default function Tags({ allTags }) {
    return (
        <Layout currentPage={'tags'}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            {/* section classes that didn't exist? className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} */}
            <section >
                <div className={aboutStyles.chipContainer}>
                    {allTags.map(({ tag }) => (
                        <Link href={`/tags/${tag}`} key={tag}>
                            <span className={aboutStyles.chip} style={{ backgroundColor: getRandomColor() }}>
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
