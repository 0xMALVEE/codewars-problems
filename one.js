function explode(str){
    let arr =  str.split("")

    let result = []

    arr.map(item =>{
        let num1 = parseInt(item)
        for(let i = 0;i<num1;i++){
            result.push(item)
        }
    })
    return  result.join('')

}

console.log(explode("2345"))