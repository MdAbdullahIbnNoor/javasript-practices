const friends = [12, 45, 34, 56, 76, 47, 59, 80, 98];

// const partial = friends.slice(2, 5);

const partial = friends.splice(2, 5, 44, 55, 66, 77);
console.log(partial);
console.log(friends);