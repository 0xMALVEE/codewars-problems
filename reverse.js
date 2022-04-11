// weirdReverse=a=>{
//     let result = []
//     a.map((item,index)=>{
//         result.push(a[a.length - index + 1])
//     })
//      return result;
// }

weirdReverse=a=>a.reverse()

console.log(weirdReverse([5,4,3,2,1]))