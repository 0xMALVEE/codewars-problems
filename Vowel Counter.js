function getCount(str) {
    var vowelsCount = 0;
    
    str.split("").map(item=>{
    if(item.toLowerCase() == "a" || item.toLowerCase() == "e" || item.toLowerCase() == "i" || item.toLowerCase() == "u" || item.toLowerCase() == "o"){
      vowelsCount += 1;
    }  
    })
    
      
    
    return vowelsCount;
  }