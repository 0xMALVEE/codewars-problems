function an(s1,s2){

    let obj1 = {}
    let obj2 = {}
    s1.split("").map(item =>{
        obj1[item] = (obj1[item] || 0) + 1
    })

    s2.split("").map(item =>{
        obj2[item] = (obj2[item] || 0) + 1
    })

    for(let key in obj1){
        
    }

    return obj2;
    


}

console.log(an("catt", "tac"))