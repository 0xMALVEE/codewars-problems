function vowelIndices(word){
    //your code here
    let result = []
    word.split("").map((item,index) =>{
      if(item.toLowerCase() == "a" || item.toLowerCase() == "e" || item.toLowerCase() == "i"|| item.toLowerCase() == "o" || item.toLowerCase() == "u" || item.toLowerCase() == "y" ){
        result.push(index + 1)
      }
    })
    if(result.length == 0){
      return []
    }else{
      
    }
    return result;
  }