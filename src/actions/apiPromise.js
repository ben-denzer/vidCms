const apiUrl = process.env['NODE_ENV'] === 'development' ?
    'http://localhost:8000/' :
    'https://bdenzer.xyz/equinimity/';

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
            if (options.hasOwnProperty(i) && i !== 'videoInputFile') {
                formData.append(i, options[i]);
            }
        }
        formData.append('video', options.videoInputFile);
        req.send(formData);
    });
};

export {apiPromise, uploadPremiumPromise};