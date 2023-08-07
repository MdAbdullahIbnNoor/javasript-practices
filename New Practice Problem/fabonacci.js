var num = 5;
var total = 0;
var total1 = 0;
var total2 = 1;
console.log(total);
console.log(total2);
for(var i = 1; i <= num; i++){
    total = total + total2;
    console.log(total);
    total1 = total2;
    total2 = total;
}