function electrons_around_the_cores( dices ){
    // Just so you can try some numbers
    let a = dices[0]
    let b = dices[1]
    let c = dices[2]
    let d = dices[3]
    
    if(a == b && a == c && a == d && a != 3 && a != 5){
      return 0 ;
    }else{
      
      let temp = 0 ;
      let counter = 0;
      dices.map(item =>{
        if(item != 1){
          temp = item;
        }
      })
      
      dices.map(item =>{
        if (item == temp){
          counter += 1;
        }
      })
      console.log(temp, counter)
      return (temp - 1) * counter;
    }
    
    
  
  }
  