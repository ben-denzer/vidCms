const namesAZ = (a, b) => a.username.toLowerCase() > b.username.toLowerCase();
const namesZA = (a, b) => a.username.toLowerCase() < b.username.toLowerCase();
const users_oldNew = (a,b) => a.signup_date > b.signup_date;
const users_newOld = (a,b) => a.signup_date < b.signup_date;

const userSort = (array, sortBy, filterBy) => {
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

export default userSort;