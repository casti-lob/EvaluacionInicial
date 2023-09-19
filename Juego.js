//Obtenemos todas las etiquetas dentro del div
let cuadros = document.querySelector('.grid')

//creamos un evento en todo el div
cuadros.addEventListener("click", e=>{
    //ponemos los colores
    colores =['#922b21','#d4ac0d ','#154360','#0e6251']
    //generamos un numero aleatorio dentro de la longitud del array
    numero = Math.floor(Math.random() * colores.length);
    //cambiamos el color a la etiqueta seleccionada
    e.target.style.background=colores[numero]
    ganador()

})

function ganador(){
    //sacamos el color de cada div y lo comparamos
    one = document.querySelector('.one')
    colorOne=window.getComputedStyle(one, null).getPropertyValue('background-color')

    two = document.querySelector('.two')
    colorTwo= window.getComputedStyle(two, null).getPropertyValue('background-color')

    three = document.querySelector('.three')
    colorThree= window.getComputedStyle(three, null).getPropertyValue('background-color')

    four = document.querySelector('.four')
    colorFour= window.getComputedStyle(four, null).getPropertyValue('background-color')

    if(colorOne== colorTwo && colorOne== colorThree && colorOne == colorFour){
        alert= document.getElementById('alert').hidden=false
      
        
    }
}


