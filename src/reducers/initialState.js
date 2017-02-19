export default {
    user: {
        username    : '',
        token       : '',
        admin       : false,
        premium     : false
    },
    message: {
        success         : '',
        error           : '',
        info            : '',
        pendingApiCalls : 0

    },
    forms: {
        authErrorVal    : '',
        blogImageUrl    : '',
        blogTitleVal    : '',
        blogHeadlineVal : '',
        commentVal      : '',
        editorHtml      : '',
        emailVal        : '',
        inputFile       : [],
        passwordVal     : '',
        password2Val    : '',
        saveDataVal     : false,
        usernameVal     : '',
        videoInputFile  : [],
        videoTitleVal   : '',
        videoHeadlineVal: '',
        youtubeUrlVal   : '',
    },
    content: {
        allBlogs    : [],
        allImages   : [],
        allVideos   : [],
        allComments : [],
        currentPost: {
            post_title      : '',
            post_headline   : '',
            post_url        : '',
            post_text       : '',
        },
        recentVideos    : [],
        recentBlogs     : [],
    },
    admin: {
        adminData: {
            users   : [],
            comments: [],
            videos  : []
        },
    },
    trashCan: {
        commentTrashCan: []
    },
    route: ['/']
};