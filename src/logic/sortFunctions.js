const sortFunctions = {
    postsAZ(a, b) {
        a = a.postTitle.toLowerCase();
        b = b.postTitle.toLowerCase();
        if (a === b) return 0;
        return a < b ? -1 : 1;
    },
    postsZA(a, b) {
        a = a.postTitle.toLowerCase();
        b = b.postTitle.toLowerCase();
        if (a === b) return 0;
        return a > b ? -1 : 1;
    },
    oldNew(a, b) {
        if (a.date === b.date) return 0;
        return a.date < b.date ? -1 : 1;
    },
    newOld(a, b) {
        if (a.date === b.date) return 0;
        return a.date > b.date ? -1 : 1;
    }
};

export default sortFunctions;