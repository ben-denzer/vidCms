import unescapeLinks from './unescapeLinks';

const createMarkup = text => {
    if (/<script/.test(text)) return {__html: ''}
    return {__html: text.toString()};
};

const createMarkupWithLinks = text => {
    const markup = unescapeLinks(text.toString());
    return {__html: markup};
};

export {createMarkupWithLinks};

export default createMarkup;