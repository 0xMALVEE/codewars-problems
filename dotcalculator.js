function dotCalculator (equation) {
    if(equation.includes("+")){
        let first = equation.indexOf("+") - 1
        let second   =  equation.length - (equation.indexOf("+")+2)
        return ".".repeat(first + second)
        
    }

    if(equation.includes("-")){
        let first = equation.indexOf("-") - 1
        let second   =  equation.length - (equation.indexOf("-")+2)
        // console.log(first, second)
        return ".".repeat(first - second)
        
    }
	
    if(equation.includes("*")){
        let first = equation.indexOf("*") - 1
        let second   =  equation.length - (equation.indexOf("*")+2)
        return ".".repeat(first * second)
        
    }

    if(equation.includes("//")){
        let first = equation.indexOf("//") - 1
        let second   =  equation.length - (equation.indexOf("//")+3)
        return ".".repeat(first / second)
    }
}

console.log(dotCalculator("...... // ..."))