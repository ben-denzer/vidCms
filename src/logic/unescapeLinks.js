const unescapeLinks = (text) => {
    return new Promise((resolve) => {
        if (!text) return resolve('');
        const pattern = /(https?:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        resolve(text.replace(
            pattern,
            (match) => {
                let realUrl = match;
                if (!/https/.test(match)) {
                    realUrl = `https://${match}`;
                } else if (!/http/.test(match)) {
                    realUrl = `http://${match}`;
                }
                return `<a target="_blank" href="${realUrl}">${match}</a>`;
            }
        ));
    });
};

const unescapeLinksSync = text => {
    if (!text) return;
    const pattern = /(https?:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    return text.replace(
        pattern,
        match => {
            let realUrl = match;
            if (!/http/.test(match)) {
                realUrl = `http://${match}`;
            }
            return `<a target="_blank" href="${realUrl}">${match}</a>`;
        }
    );
};

export default unescapeLinksSync;