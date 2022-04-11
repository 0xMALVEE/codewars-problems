// function pattern(n1){
//     let result = []
//     for(let i = 0;i<n1;i++){

//         result.push(`${i == 0 ? i + 1 : "n1"}${'*'.repeat(i)}${i != 0 ? i+1 : ""}${i != n1 -1 ? "\\" : ''}`)
//     }
//     return  result.join('')
// }

// console.log(pattern(10))

function pattern(n1){
    let result = []
    for(let i = 0;i<n1;i++){

        result.push(`${1}${'*'.repeat(i)}${i != 0 ? i+1 : ""}${i != n1-1 ? "\n" :'' }`)
    }
    return  result.join('')
}

console.log(pattern(10))