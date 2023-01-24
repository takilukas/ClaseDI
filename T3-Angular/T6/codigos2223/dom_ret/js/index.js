// id class tag --> getElementByXXXX
// selectores

// document.querySelector --> HTMLELEMENT -> button --> primera ocurrencia
// document.querySelectorAll --> NodeList -> List<Button> --> lista completa de elementos

//let boton = document.querySelector("button");
//let boton = document.querySelector("#boton_borrar");
//let boton = document.querySelector(".btn");
//console.log(boton);
//let lista = document.querySelector("ul.elemento");
//let lista = document.querySelector("div.container ul.elemento");
//let elementosLi = document.querySelector("ul").querySelectorAll("li");

let botonAgregar = document.querySelector("#boton_agregar");
let botonBorrar = document.querySelector("#boton_borrar");
let listaUno = document.querySelector("#lista_uno");
let listaDos = document.querySelector("#lista_dos");
let select = document.querySelector("#select_lista");
let elementosLi = document.querySelectorAll("ul.elemento li");

select.addEventListener("change", () => {
  console.log(select.value);
});
botonAgregar.addEventListener("click", (event) => {
  //console.log("boton puslado");
  //<li>Elemento nuevo</li>
  //listaUno.innerHTML += `<li class="list-group-item">Elemento prueba</li>`;
  let nodoLI = document.createElement("li");
  nodoLI.textContent = "Elemento prueba";
  //nodoLI.className = "list-group-item";
  nodoLI.classList.add("list-group-item");
  nodoLI.addEventListener("click", (event) => {
    console.log("Ejemplo de cosa");
  });
  listaUno.append(nodoLI);
});
botonBorrar.addEventListener("click", (event) => {
  console.log("boton puslado");
});

/* elementosLi.forEach((element) => {
  //console.log(element.textContent);
  console.log(element.innerHTML);
}); */