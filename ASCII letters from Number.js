function convert(number){
    // ...Convert integers given as string into ASCII uppercase letters...
    let arr = number.split("")

    let result = ""

    let stateR = false
    // arr.map((item,index)=>{
        
    // })
    for(let i = 0;i<arr.length;i++){
        if(stateR == true){
            stateR = false
            continue; 
       }
       result += String.fromCharCode(parseInt(`${arr[i]}${arr[i+1]}`))
       stateR = true
    }

    return result;
}


console.log(convert("656667"))