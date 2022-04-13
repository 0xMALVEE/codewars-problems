function longest(words) {
    let long = 0
    let result = ""
    words.map(item =>{
      if(long < item.length){
        long = item.length
        result = item;
      }
    })
    return result.length; //code here
  }