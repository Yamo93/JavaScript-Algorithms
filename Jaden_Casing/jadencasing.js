String.prototype.toJadenCase = function (str) {
    var newArray = this.split(" ");

    for (let i = 0; i<newArray.length;i++) {
        newArray[i] = newArray[i][0].toUpperCase() + newArray[i].slice(1);
    }

    return newArray.join(" ");
}