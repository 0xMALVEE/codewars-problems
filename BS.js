function indexOf(words, target){
    let tLen = target.length;

      let start=0, end=words.length-1;
       let indexO = 0;
      while (start<=end){
          let mid=Math.floor((start + end)/2);

          if (words[mid].length===target.length  ) {
            if(words[mid] == target){
              return mid;
              break;
            }else{
              indexO = mid;
              break;
            }
          }


          else if (words[mid].length < tLen){
               start = mid + 1;
          }
            
          else{
       
               end = mid - 1;
          }
            
      }

      let lastM = 0;
      lastM = indexO;
      while(words[lastM].length == target.length){
        lastM -= 1;
      }
      
      let result = ""
      let resultO = 0
      let realLastI = lastM + 1;
      while(words[realLastI] != target)    {
      
        realLastI += 1;
        resultO = realLastI
          result = words[realLastI]
        
      }
    return resultO;
//       console.log("2")


}