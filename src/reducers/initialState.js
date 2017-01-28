export default {
    user: {
        name: '',
        token: '',
        admin: false,
        premium: false
    },
    message: {
        success: '',
        error: '',
        info: ''
    },
    forms: {
        authErrorVal: '',
        blogImageUrl: '',
        blogTitleVal: '',
        blogHeadlineVal: '',
        commentVal: '',
        editorHtml: '',
        emailVal: '',
        inputFile: [],
        passwordVal: '',
        password2Val: '',
        saveDataVal: false,
        usernameVal: '',
        videoInputFile: [],
        videoTitleVal: '',
        videoHeadlineVal: '',
        youtubeUrlVal: '',
    },
    content: {
        allBlogs: [],
        allImages: [],
        allVideos: [],
        currentPost: {
            post_title: '',
            post_headline: '',
            post_url: '',
            post_text: '',
        },
        recentVideos: [],
        recentBlogs: [],
    },
    comments: [],
    admin: {
        adminData: {
            users: [],
            comments: [],
            videos: []
        },
    },
    trashCan: {
        commentTrashCan: []
    }
};