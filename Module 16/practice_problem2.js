// var math = 75.25;
// var biology = 65;
// var chemistry = 80;
// var physics = 35.45;
// var bangla = 99.50;


// var avg = ((math + biology + chemistry + physics + bangla) / 5).toFixed(2);

// console.log(avg);

var subjectsArray = [75.25, 65, 80, 35.45, 99.50];

var sum = 0;

for(var i = 0; i < subjectsArray.length; i++)
{
    sum += subjectsArray[i];
}

console.log(sum);

var avg = parseFloat((sum / subjectsArray.length).toFixed(2));

console.log(avg);
