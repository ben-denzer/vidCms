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
        usernameVal: '',
        passwordVal: '',
        password2Val: '',
        emailVal: '',
        saveDataVal: false,
        authErrorVal: '',
        editorHtml: '',
        videoInputFile: [],
        videoTitleVal: '',
        videoHeadlineVal: '',
        youtubeUrlVal: '',
        commentVal: ''
    },
    content: {
        allVideos: {},
        currentVideo: {
            video_title: '',
            video_headline: '',
            video_url: '',
            video_text: '',
        },
        recentVideos: []
    },
    comments: [],
    admin: {
        adminData: {
            users: [],
            comments: [],
            videos: []
        }
    }
};