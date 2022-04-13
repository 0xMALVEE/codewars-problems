function findSum(){
    let result = 0
    for(let i = 0;i < arguments.length;i++){
      if(arguments[i] < 0){
        return -1;
      }
      result  += arguments[i]
    }
    return result;
  }