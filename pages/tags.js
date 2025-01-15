import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getAllTags } from '../lib/posts';

export default function Tags({ allTags }) {
    return (
        <Layout currentPage={'tags'}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <table className={utilStyles.table}>
                    <thead>
                        <tr>
                            <th>Tag</th>
                            <th>Posts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTags.map(({tag, postCount}) => (
                            <tr key={tag}>
                                <td><Link href={`/tags/${tag}`}>{tag}</Link></td>
                                <td>{postCount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
