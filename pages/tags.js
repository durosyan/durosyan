import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getAllTags } from '../lib/posts';

export default function Tags({ allTags }) {
    const colors = ['#a6e22e', '#ae81ff', '#f92672', '#e2e22e', '#56adbc', '#86b42b', '#8c6bc8', '#c4265e', '#ac6218'];

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    return (
        <Layout currentPage={'tags'}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <div className={utilStyles.chipContainer}>
                    {allTags.map(({ tag, postCount }) => (
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
