import { getSortedPostsData } from './posts'

export function getPostsByTag(tag) {
    let posts = getSortedPostsData()
    return posts.filter(post => post.tags.includes(tag));
}

export function getAllTags() {
    let posts = getSortedPostsData()
    const tagCounts = posts.reduce((acc, post) => {
        post.tags.forEach(tag => {
            if (!acc[tag]) {
                acc[tag] = 0;
            }
            acc[tag]++;
        });
        return acc;
    }, {});

    const tags = Object.keys(tagCounts).map(tag => ({
        tag,
        postCount: tagCounts[tag],
    }));

    return tags;
}