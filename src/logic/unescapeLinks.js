const unescapeLinks = text => {
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

const unescapeLinksPromise = text => {
    return new Promise((resolve, reject) => {
        if (!text) reject({error: 'no args to unescapeLinksPromise'});
        const pattern = /(https?:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        
        const final = text.replace(
            pattern,
            match => {
                let realUrl = match;
                if (!/http/.test(match)) {
                    realUrl = `http://${match}`;
                }
                return `<a target="_blank" href="${realUrl}">${match}</a>`;
            }
        );
        resolve(final);
    });
};

export {unescapeLinksPromise};
export default unescapeLinks;