function make_avg(mark_1, mark_2, mark_3){
    var total = mark_1 + mark_2 + mark_3;
    var avg = total / 3;
    return avg;
}

var mark_1 = 20;
var mark_2 = 30;
var mark_3 = 62;

var avg_fun= make_avg(mark_1, mark_2, mark_3);
avg = avg_fun.toFixed(2);
console.log('The avarage of the 3 integers: ', avg);