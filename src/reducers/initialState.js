export default {
    user: {
        admin                   : false,
        email                   : '',
        token                   : '',
        premium                 : false,
        premiumExpirationDate   : '',
        premiumSignupDate       : '',
        signupDate              : '',
        username                : '',
    },
    message: {
        success         : '',
        error           : '',
        info            : '',
        pendingApiCalls : 0
    },
    forms: {
        authErrorVal        : '',
        blogImageUrl        : '',
        commentVal          : '',
        clearForms          : false,
        editorHtml          : '',
        emailVal            : '',
        passwordVal         : '',
        password2Val        : '',
        saveDataVal         : false,
        usernameVal         : '',
        uploadTitleVal      : '',
        uploadHeadlineVal   : '',
        youtubeUrlVal       : '',
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
        blogs   : [],
        comments: [],
        images  : [],
        users   : [],
        videos  : []
    },
    route: ['/']
};