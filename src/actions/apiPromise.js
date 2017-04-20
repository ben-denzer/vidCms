import {apiUrl} from '../.keys';

const errorParser = status => {
    return status === 401 || status === 403 ?
        'unauthorized' :
        status < 500 ?
            'Request Error' :
            'Server Error';
};

const getPublicJson = url => {
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}${url}`)
            .then(res => res.json())
            .then(json => resolve(json))
            .catch(() => reject())
    });
};

const postToApi = (options, url) => {
    const fetchHeaders = new Headers({
        'Content-Type': 'application/json'
    });

    const fetchInit = {
        'method'    : 'post',
        'headers'   : fetchHeaders,
        'body'      : JSON.stringify(options)
    };

    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}${url}`, fetchInit)
            .then(data => {
                if (data.ok)    resolve(data.json());
                else            reject(errorParser(data.status));
            }).catch(err => reject());
    });
};

const postWithMedia = (options, url) => {
    let formData = new FormData();
    for (let i in options) {
        if (options.hasOwnProperty(i) && !/file/i.test(i)) {
            formData.append(i, options[i]);
        }
    }
    options.videoInputFile && formData.append('video', options.videoInputFile);
    options.inputFile && formData.append('image', options.inputFile);

    const fetchInit = {
        'method'    : 'post',
        'body'      : formData
    };

    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}${url}`, fetchInit)
            .then(data => {
                if (data.ok)    resolve(data.json());
                else            reject(errorParser(data.status));
            }).catch(err => reject());
    });
};

const apiPromise = (options, url) => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('POST', apiUrl + url);
        req.setRequestHeader('Content-Type', 'application/json');

        req.onload = () => {
            if (req.status >= 200 && req.status < 400) {
                resolve(JSON.parse(req.responseText));
            } else if (req.status === 401 || req.status === 403) {
                reject('unauthorized');
            } else if (req.status < 500) {
                reject('request error');
            } else {
                reject('server error');
            }
        };
        req.onerror = () => {
            reject('onError called');
        };
        req.send(JSON.stringify(options));
    });
};

const uploadPremiumPromise = (options, url) => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('POST', apiUrl + 'admin/' + url);

        req.onload = () => {
            if (req.status >= 200 && req.status < 400) {
                resolve(JSON.parse(req.responseText));
            } else if (req.status === 401 || req.status === 403) {
                reject('unauthorized');
            } else if (req.status < 500) {
                reject('request error');
            } else {
                reject('server error');
            }
        };
        req.onerror = () => {
            reject('onError called');
        };

        let formData = new FormData();
        for (let i in options) {
            if (options.hasOwnProperty(i) && !/file/i.test(i)) {
                formData.append(i, options[i]);
            }
        }
        options.videoInputFile && formData.append('video', options.videoInputFile);
        options.inputFile && formData.append('image', options.inputFile);

        req.send(formData);
    });
};


export {apiPromise, getPublicJson, postToApi, postWithMedia, uploadPremiumPromise};
