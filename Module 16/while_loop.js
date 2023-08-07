// Determining odd and even numbers in the range.

var oddNumbers = 0;
var evenNumber = 0;
var range = 0;

while(range < 100){
    if(range % 2 == 0){
        evenNumber++;
    }
    else{
        oddNumbers++;
    }

    range++;
}

console.log('Odd numbers and Even numbers in 100 range: ', oddNumbers + ' ' + evenNumber);