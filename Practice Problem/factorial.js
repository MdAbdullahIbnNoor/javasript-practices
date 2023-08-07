function factorial(num)
{
    let multiply = num;
    for(var i = 1; i < num; i++){
        multiply *= num - i;
    }
    return multiply;
}

// *this is main section
var num = 1000;
factorialMul = factorial(num);
console.log(factorialMul);