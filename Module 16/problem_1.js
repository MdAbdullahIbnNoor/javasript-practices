var friend = ['Tom', 'Jane', 'Peter', 'John', 'Me'];
var number = [66, 95, 56, 40, 85];

for(var i = 0; i < friend.length; i++)
{
    if(number[i]>=80){
        console.log(friend[i], 'got A grade in the final exam');
    }
    else if(number[i]>=60){
        console.log(friend[i], 'got B grade in the final exam');
    }
    else if(number[i]>=50){
        console.log(friend[i], 'got C grade in the final exam');
    }
    else if(number[i]>=40){
        console.log(friend[i], 'got D grade in the final exam');
    }
    else{
        console.log(friend[i], 'got F grade in the final exam');
    }
}
