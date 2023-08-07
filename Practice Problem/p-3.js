function make_avgg(number, len)
{
    var total = 0;
    for(var i = 0; i < len; i++)
    {
        total += number[i];
    }

    var avg = total / len;
    return avg;
}

var number = [50, 44, 36, 49, 60, 57, 25];
var len = number.length;
var avgg = make_avgg(number, len);
console.log(avgg.toFixed(2));
