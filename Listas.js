//Obtenemos la etiqueta button para crear el evento
button = document.querySelector('#button')


//Creamos el evento que se activa con click al button
button.addEventListener('click', (e)=>{
    //Obtenemos los valores del formulario
    titulo = document.querySelector('#titulo').value
    sinopsis = document.querySelector('#sinopsis').value
    genero = document.querySelector('#genero').value
    prioritario = document.querySelector('#prioritario').checked
    temporadas= document.querySelector('#temporadas').value
    alert = document.querySelector(".alert")

    //si no tiene los campos sin rellenar se borra la alerta si existe y se crea la tarjeta
    if(titulo!=null&&sinopsis!=null&&genero!='Género'&&temporadas>0){
        
        if(alert!=null){
            alert.remove()
        }
        addCard(titulo, prioritario,sinopsis,genero,temporadas.toString())
    }else{ // si no pues se pone la alerta si no existe
        if(alert==null){
            error()

        }
    }
})


function addCard(titulo,prioritario,sinopsis,genero,temporadas){
    lista = document.querySelector('.lista')
    card = document.createElement('div')
    card.setAttribute("class","card text-center")

    prioridad = document.createElement('div')
    prioridad.setAttribute("class","card-header")
    if(prioritario!= false){
        textprioridad = document.createTextNode("Hay que verlo ya")
    }else{
        textprioridad = document.createTextNode("No es importante")
    }
    prioridad.appendChild(textprioridad)

    body = document.createElement('div')
    body.setAttribute("class", "card-body")

    title = document.createElement('h5')
    title.setAttribute("class","card-title")
    textTitle = document.createTextNode(titulo)
    title.appendChild(textTitle)

    p = document.createElement('p')
    p.setAttribute("class","card-text")
    textP = document.createTextNode(sinopsis)
    p.appendChild(textP)

    category = document.createElement('h6')
    category.setAttribute("class","card-title")
    textCat = document.createTextNode(genero)
    category.appendChild(textCat)

    secondary = document.createElement('div')
    secondary.setAttribute("class","card-footer text-body-secondary")
    textCat = document.createTextNode(`Número de temporadas ${temporadas}`)
    secondary.appendChild(textCat)

    card.appendChild(prioridad)
    body.appendChild(title)
    body.appendChild(category)
    body.appendChild(p)
    card.appendChild(body)
    card.appendChild(secondary)
    lista.appendChild(card)

}

function error(){
    lista = document.querySelector('.error')
    alert = document.createElement('div')
    alert.setAttribute("class","alert alert-danger")
    alert.setAttribute("role","alert")
    text = document.createTextNode("Te falta algun campo por completar")
    alert.appendChild(text)
    lista.appendChild(alert)

}