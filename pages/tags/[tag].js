import Layout from '../../components/layout';
import Date from '../../components/date';
import Link from 'next/link';
import styles from '../../styles/post.module.css';
import { getPostsByTag, getAllTags } from '../../lib/tags';
import Head from 'next/head';

export default function Post({ tag, tagPosts }) {
    return (
        <Layout>
            <Head>
                <title>{tag}</title>
            </Head>
            <h1>{tag}</h1>
            <ul className={styles.list}>
            {tagPosts.map(({ id, date, title }) => (
                <li className={styles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br />
                    <small className={styles.lightText}>
                        <Date dateString={date} />
                    </small>
                </li>
            ))}
            </ul>
        </Layout>
    );
}

// this generates the props for the page
export async function getStaticProps({ params }) {
    const tagPosts = await getPostsByTag(params.tag);
    return {
        props: {
            tag: params.tag,
            tagPosts,
        },
    };
}

// this generates the paths for all the tags
export async function getStaticPaths() {
    const allTags = getAllTags();
    const paths = allTags.map((tag) => ({ params: { tag: tag.tag } }));

    return {
        paths,
        fallback: false,
    };
}
