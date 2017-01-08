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
        allVideos: {},
        allBlogs: {},
        currentVideo: {
            video_title: '',
            video_headline: '',
            video_url: '',
            video_text: '',
        },
        currentBlog: {
            blog_title: '',
            blog_headline: '',
            blog_url: '',
            blog_text: '',
        },
        recentVideos: []
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