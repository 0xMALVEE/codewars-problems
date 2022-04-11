function likes(names) {
    let nLen = names.length;
    return `${nLen == 1 ? (names[0] +" likes this") : nLen == 2? names[0] + " and " + names[1] + " like this" :  nLen >= 4 ? names[0] +", " + names[1] + " and " + String(nLen - 2) + " others like this"  : nLen == 0 ? "no one likes this": nLen ? names[0] + ', ' + names[1] + " and " + names[2] +" like this" : ""}`
}


console.log(likes(["Max", "John", "Mark"]     ))