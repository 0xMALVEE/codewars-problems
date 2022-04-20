function solve(s){
    let a = s.match(/[a-z]/g).length
    let b = s.match(/[A-Z]/g).length
    let c = s.match(/[0-9]/g).length
    let d = s.match( /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g).length
    return [b,a,c,d]
}

console.log(solve("*'&ABCDabcde12345"))