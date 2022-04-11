function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

function drinks(str){
    let counter = 0;
    for(let i = 0;i< str.length; i ++){
        if(isNumeric(str[i])){
            counter += parseInt(str[i])
        }

    }

    return `${counter} ${counter == 0 || counter == 1 ? "glass of water" : "glasses of water"}`
}

console.log(drinks("1 beer"))