function filterLongWords(sentence, n) {
    let result = []

    sentence.split(" ").map((item) =>{
        if(item.length > n) {
            result.push(item)
        }
    })

    return result;

}


filterLongWords("The quick brown fox jumps over the lazy dog", 4)