const createMarkup = text => {
    if (/<script/.test(text)) return {__html: ''}
    return {__html: text.toString()};
};

export default createMarkup;