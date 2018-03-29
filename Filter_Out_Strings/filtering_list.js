function filter_list(l) {
    // Return a new array with the strings filtered out
    var newArray = [];
    for (Var i = 0; i<l.length; i++) {
        if (typeof l[i]) !== 'string') {
            newArray.push(l[i]);
        }
    }
    return newArray;
}