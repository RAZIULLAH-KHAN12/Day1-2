const defaultResult = 0;
let currentResult;
//Make a custom Function
function add(num1,num2){
    const result = num1 + num2;
    return result;
}
currentResult = add(6,5);
let calculationDescription = '(' + defaultResult + ' 10) * 3 / 2 -1';
outputResult(currentResult, calculationDescription);