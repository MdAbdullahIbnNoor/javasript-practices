function fooBar(times){
    for(var i = 1; i <= times; i++)
    {
        if (i % 3 === 0 && i % 5 === 0){
            console.log('foobar');
            continue;
        }
        else if(i % 3 === 0){
            console.log('foo');
            continue;
        }

        else if(i % 5 === 0){
            console.log('bar');
        }

        else{
            console.log(i);
        }
    }
}


fooBar(50);