function charToAscii(string){
    //your code here
    let result ={}
    if(string.length == 0){
        return null;
    }
    string.match(/[A-Za-z]/g).map(item=>{
        result[item] = item.charCodeAt()
    })

    return result;
}


console.log(charToAscii("ABaa ^"))