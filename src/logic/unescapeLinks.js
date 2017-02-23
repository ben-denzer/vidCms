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

export default unescapeLinks;