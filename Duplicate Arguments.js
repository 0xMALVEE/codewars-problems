function solution(){
    // return true if this method is called with duplicate argument values 
     let result = false
     for(let i = 0;i< arguments.length;i++){
       for(let j = 0;j< arguments.length;j++){
         if(arguments[i] === arguments[j] && i != j){
           return true;
         }
       }
     }
     return false;
   }