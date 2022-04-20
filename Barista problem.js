function barista(coffees){
    let sorted = coffees.sort( function( a , b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    })
    let result = 0;

    let min_time = []
    sorted.map((time, index)=>{
        if(index == 0 ){
            result = time;
            min_time.push(time)
        }else{
            min_time.push(result +time+2 )
            result += time+2;
        }
    })
    let sum = 0;
    min_time.map(time=>{
        sum += time;
    })
    return sum;
}


console.log(barista([ 2, 10, 5, 3, 9 ]))