const names = ['abul', 'babul', 'kabul', 'nabul', 'tabul', 'tebul', 'nabul', 'abul', 'abul', 'nabul', 'kabul', 'tebul', 'tabul', 'babul', 'kabul', 'babul', 'nabul', 'hablu'];


function removeDuplcate(names) {
    const unique = [];
    for (var i = 0; i < names.length; i++) {
        const nam = names[i];
        if (unique.includes(nam) === false){
            unique.push(nam);
        }
    }
    return unique;
}

const uniqueNames = removeDuplcate(names);
console.log(uniqueNames);


