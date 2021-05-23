'use strict'

// ELEGIR ELEMENTOS
        
let botonAdd = document.querySelector('[type="button"]');
let nuevoItem = document.querySelector('[type="text"]');
// SOLO UN ELEMENTO
let nodoParticipantes = document.querySelector("#participantes");

let botonSorteo = document.querySelector("#btnsorteo");

// LLAMAR AL BOTON ADD PARA AGREGAR
            
botonAdd.addEventListener("click",agregar);
    
// FUNCION PARA CREAR Y AGREGAR NOMBRES A LA LISTA

function agregar(){
    
        if (nuevoItem.value == ""){
                
            }else{

            let lista = document.createElement("li");
            lista.innerHTML = nuevoItem.value;
            
            nodoParticipantes.appendChild(lista);
            nuevoItem.value = "";
            }
}

// ELEGIR AL AZAR UN NOMBRE DE LA LISTA

let users = [];
// let users = [nodoParticipantes.length];
// let users = [ 1 ];
 

/**
 * 
 * 
 * @param {*} item 
 * @returns 
 */
function indiceAleatorio (){
    return Math.floor(Math.random() * users.length);
    
}



// BOTÓN PARA ELEGIR AL AZAR EL NOMBRE

 
botonSorteo.addEventListener('click', () => {
    users = document.querySelectorAll("#participantes>li");

    // sorteo();
    ralentizar();
});

// SetInterval o setTimeOut para ralentizar el random

let ref_time;
let contador = 0;
function sorteo(){
    let index = indiceAleatorio();
    console.log("Ganador")
    console.log(users[index])
    
    // nodoParticipantes.innerHTML = users[index].innerHTML; // con esto solo conseguimos pintar, pero ni añade ni quita la clase.

    // Primero hay que borrar la clase a todos y después añade la clase al elegido [index]

    for(let i = 0 ; i < users.length; i++){

        users[i].classList.remove ('winner');

    }
    // for(let i = 0 ; i < users.length; i++){

		users[index].classList.add ('winner');
	// }

}


function ralentizar(){
    // indiceAleatorio();
    
    ref_time = setInterval(function(){
        contador++;
        console.log(contador)
        sorteo();
        if(contador == 10) 
        {
            clearInterval(ref_time);
            contador = 0; //hay que volver a poner el contador a 0 porque si no, no hace el random la segunda vez.
        }
    }, 50);
    // botonSorteo.addEventListener("click", ralentizar);

}





