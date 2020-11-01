function getTitle(str) {
    var finalStr = "";
    str.split('').forEach((c, i) => {
        if (i == 0) {
            finalStr = c.toUpperCase();
        } else {
            if (c == c.toUpperCase()) {
                finalStr += ' ' + c;
            } else {
                finalStr += c;
            }
        }
    });
    return finalStr;
}
list.forEach(x => {
    console.log(x);
    x.title = getTitle(x.title);
});