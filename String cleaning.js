function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

function stringClean(s){
    return s.replace(/\d/g, "")
}

console.log(stringClean("hasdf 234 asdfjk 234"))