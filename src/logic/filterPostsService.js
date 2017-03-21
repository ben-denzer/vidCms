import sortFunctions from './sortFunctions';

const filterPostsService = (blogs, videos, sortBy, filterBy) => {
    const filters = {
        all(blogs, videos)      { return [...blogs, ...videos]; },
        blogs(blogs)            { return blogs; },
        videos(blogs, videos)   { return videos; }
    }

    filters[filterBy](blogs, videos).sort((a,b) => sortFunctions[sortBy](a,b));;
};

export default filterPostsService;
