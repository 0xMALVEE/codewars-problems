var htmlString1 = 
`<article id="animals">
  
  <h1 class="main-heading">Nature's Wonders</h1>
  <p>In this article we discuss animals.</p>
  
  <section id="birds">
    <h2 class="favourite">Birds</h2>
    <p>
      Forest is a wonderful place to see birds.
    </p>
  </section>
  
  <section id="butterflies">
    <h2>Butterflies</h2>
    <p>
      Butterflies possess some of the most striking colour displays found in nature.
    </p>
  </section> 
  
</article>`

function getTagContent(htmlString, tag) {
    if(htmlString.match(new RegExp(`</${tag}>`, 'g')) == null){
      return []
    }
    let totalCount = htmlString.match(new RegExp(`</${tag}>`, 'g')).length

    let result_ = []
    let htmlString_ = htmlString
    let done = 0
    for(let i =0;i< totalCount;i++){
      let checkI = htmlString_.indexOf(`</${tag}>`) - 1
      let temp = checkI
      while(htmlString_[temp] != ">"){
          temp -= 1;
          if(htmlString_[temp] == ">"){

            result_.push(htmlString_.substring(temp+1, checkI+1).trim())
            done += 1;
            htmlString_ = htmlString_.slice(checkI+5).trim()            
            break;

          }  
      }
    }
    return result_; 
}

console.log(getTagContent(htmlString1, "h3"))