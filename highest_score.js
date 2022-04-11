function high(x){
    let arr = x.split(" ")
    let hScore = 0;
    let indexAt = 0;
    arr.map((word, index) => {
        let cScore = 0;
        for(let i = 0;i<word.length;i++){
            cScore += word.charCodeAt(i) - 96
        }
        if(hScore < cScore) {
            hScore = cScore
            indexAt = index
        }
    })

    return arr[indexAt]
}

console.log(high("what time are we climbing up the volcano"))