function sum() {
    // return the sum of all arguments given.
    let sum = 0;
    for (var i=0; i < arguments.length; i++) {
        sum += arguments[i] 
    }

    return sum;

}

console.log(sum(1,2,3,4))