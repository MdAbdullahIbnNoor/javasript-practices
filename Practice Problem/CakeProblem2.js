function jimVsDelaVsChinku(num1, num2, num3){
    var high = Math.max(num1, num2, num3);
    if(high === num1){
        console.log('Jim');
    }

    else if(high === num2){
        console.log('Dela');
    }
    else{
        console.log('Chinku');
    }
}

const num1 = 84;
const num2 = 65;
const num3 = 78;

jimVsDelaVsChinku(num1, num2, num3);

