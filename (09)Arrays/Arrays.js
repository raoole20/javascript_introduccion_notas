let array = [1, 2, 3, 5, 2];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log(array[1]);

//Pues es un metodo para incluir valores
array.push(7);

console.log(array.length);

console.log(typeof array);

console.log(Array.isArray(array));

console.log( array instanceof Array );