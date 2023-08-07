array1 = [11, 12, 13, 14, 15, 16];
array2 = [20, 21, 22, 25, 42];

console.log(Array.isArray(array1));

array1 = array1.concat(array2);
console.log(array1);

if(array1.indexOf(42) !== -1){
    console.log('The number is present in the array');
}
else{
    console.log('The number is not present in the array');
}