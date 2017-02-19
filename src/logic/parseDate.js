const parseDate = str => {
    if (!str) return 'now';
    let d = str.split('-');
    return `${d[1]}-${d[2].slice(0,2)}-${d[0]}`
};

export default parseDate;