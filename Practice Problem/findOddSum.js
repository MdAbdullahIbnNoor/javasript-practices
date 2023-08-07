function findOddSum(array){
    var oddTotal = 0 
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 != 0){
            oddTotal += array[i];
        }
    }
    return oddTotal;
}

const array = [5, 7, 8, 10, 45, 30, 81];
total = findOddSum(array);
console.log('The Total of Odd Numbers: ',total);