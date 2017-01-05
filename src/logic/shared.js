const namesAZ = (a, b) => a.username.toLowerCase() > b.username.toLowerCase();
const namesZA = (a, b) => a.username.toLowerCase() < b.username.toLowerCase();
const users_oldNew = (a,b) => a.signup_date > b.signup_date;
const users_newOld = (a,b) => a.signup_date < b.signup_date;

const userSort = (array, sortBy, filterBy) => {
    console.log('in sort', array, sortBy, filterBy);
    return new Promise((resolve, reject) => {
        if (!array.length) resolve([]);

        let filtered;
        switch(filterBy) {
            case 'allUsers':
                filtered = array;
                break;
            case 'premium':
                filtered = array.filter(a => a.premium);
                break;
            case 'free':
                filtered = array.filter(a => !a.premium);
                break;
            default:
                break;
        }

        let sorted;
        switch(sortBy) {
            case 'A-Z':
                sorted = filtered.sort(namesAZ);
                break;
            case 'Z-A':
                sorted = filtered.sort(namesZA);
                break;
            case 'old-new':
                sorted = filtered.sort(users_oldNew);
                break;
            case 'new-old':
                sorted = filtered.sort(users_newOld);
                break;
            default:
                break;
        }
        resolve(sorted);
    });
};


const parseDate = (str) => {
    if (!str) return 'now';
    let d = str.split('-');
    return `${d[1]}-${d[2].slice(0,2)}-${d[0]}`
};

const unescapeLinks = (text) => {
    return new Promise((resolve) => {
        if (!text) return resolve('');
        const pattern = /(https?:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        resolve(text.replace(pattern, (match) => `<a target="_blank" href="${match}">${match}</a>`));
    });
};

export {parseDate, userSort, unescapeLinks};