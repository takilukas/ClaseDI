// foreach
const listado = ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"]; //
/* se pueden meter cosas en el array -> arraylist */
/* for (let index = 0; index < array.length; index++) {
  const element = array[index]; 
} */
/* for (const key in listado) {

} */
/* for (const element of listado) {
  
} */
listado.forEach((element, index) => {
  if (index % 2 == 0)
    console.log(`El elemento ${element} esta en la posicion ${index}`);
});
// condicion ? ejecuto_true : ejercuto_false -> if else
// condicion & ejecuto_true  if
// condicion ? ejecuto_true : condicion ? ejecuto_true : condicion ? ejecuto_true : ejercuto_false if else if else if -> 0 recomendable
// obtener elementos
console.log(listado[1]);
// agregar elementos
console.log(listado.push("Opcion 5", "Opcion 6", "Opcion 7", "Opcion 8")); // al final del array
console.log(
  listado.unshift("Opcion -5", "Opcion -6", "Opcion -7", "Opcion -8")
); // al principio del array

// borrar elementos
listado.pop();
listado.pop();
listado.pop();
listado.pop();

listado.shift();
listado.shift();
listado.shift();
listado.shift();

// buscar o filtrar elementos
console.log(listado);
