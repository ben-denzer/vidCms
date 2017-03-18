import sortFunctions from './sortFunctions';

const sortComments = (comments, sortBy) => {
    if (!comments || !comments.length) return;
    return comments.sort((a,b) => sortFunctions[sortBy](a,b));
};

const normalizeComments = (rawComments, blogs, videos) => {
    if (!rawComments.length || !blogs.length || !videos.length) return [];

    const blogHashTable = {};
    blogs.forEach(blog => {
        blogHashTable[blog.blog_post_url] = blog.blog_title;
    });

    const videoHashTable = {};
    videos.forEach(video => {
        videoHashTable[video.video_id] = video.video_title
    });

    const comments = rawComments.map(comment => {
        const date  = comment.comment_date;
        const id    = comment.comment_id;
        const text  = comment.comment_text;
        const postTitle = comment.blog_fk ?
            blogHashTable[comment.blog_fk] :
            videoHashTable[comment.video_fk];

        return {date, id, text, postTitle};
    });

    return comments;
}

export {normalizeComments, sortComments};