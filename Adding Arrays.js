function arrAdder(arr) {
    let result = ""
    for(let i = 0;i< arr[0].length; i++){
        for(let j =0;j < arr.length;j++){
            if(i < arr[0].length){
                if(j == arr.length - 1 && i != arr[0].length -1){
                    result += arr[j][i] + " "
                }else{
                    result += arr[j][i]
                }
            }           
        } 
    }
    return result;
}

console.log(arrAdder([ 
    [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
    [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
    [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
    [ '', 'o', '', '', 'e', '', '', 'l' ],
    [ '', 'c', '', '', 'r', '', '', '' ],
    [ '', 'h', '', '', 'h', '', '', '' ],
    [ '', 'o', '', '', 'o', '', '', '' ],
    [ '', 'n', '', '', 'u', '', '', '' ],
    [ '', 'd', '', '', 's', '', '', '' ],
    [ '', 'r', '', '', 'e', '', '', '' ],
    [ '', 'i', '', '', '', '', '', '' ],
    [ '', 'a', '', '', '', '', '', '' ],
    [ 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']    
]))