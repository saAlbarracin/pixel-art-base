const container = document.getElementById("container");

const inputFila = document.getElementById("fila");

const inputColumna = document.getElementById("columna");

const btnCrear = document.getElementById("btnCrear");


const colorFondo = document.getElementById("color-fondo");

const colorPixel = document.getElementById("color-pixel");

btnCrear.addEventListener("click", function() {
    const cantidadFila = inputFila.value;
    const cantidadColumna = inputColumna.value;
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${cantidadColumna}, 1fr)`;
    for (let i = 0 ; i < cantidadFila ; i++) {
        for (let j = 0 ; j < cantidadColumna ; j++ ) {
            
            const nuevoPixel = document.createElement("div");
            nuevoPixel.style.backgroundColor = colorFondo.value;
            nuevoPixel.addEventListener("click", function(){
                nuevoPixel.style.backgroundColor = colorPixel.value;
            })
            
            container.appendChild(nuevoPixel);
            

            
        }
    } 
    // grid-template-columns: repeat(20, 1fr); 

    






    

});