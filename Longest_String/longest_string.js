function longest(s1, s2) {
    var string = "";
    string = s1.concat(s2).split("").sort();

    var result = [];

    for (var i = 0; i<string.length; i++) {
        if (result.indexOf(string[i]) < 0) {
            result.push(string[i]);
        }
    }

    return result.join("");
}