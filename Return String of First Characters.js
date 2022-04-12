function makeString(s){
    let result = ""
    s.split(" ").map(item =>{
        result += item[0]
    })
    return result
}

console.log(makeString("cars are very nice"))
  