var point = [20, 30, 40, 50, 67, 60, 100];
// console.log(point.sort());

var point = point.sort(function(a, b){
    return a - b;
})

console.log(point);