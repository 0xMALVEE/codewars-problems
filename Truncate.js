const solution = (string,limit)=> (string.substring(0, limit) + "...").length < string.length ? ((string.substring(0, limit) + "...")) : string


console.log(solution('Testing String', 3))
console.log(solution('Testing String', 8))
console.log(solution('Test', 8))