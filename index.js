alert("Bienvenido a nuestro RetroCine, disponemos de un unico valor de entrada $890, a continuacion podra seleccionar la pelicula deseada" )

let seleccionePelicula = parseInt(prompt('Seleccione la pelicula que desea ver: 1.Volver al futuro 2.El club de la pelea 3. El sexto sentido 4.Pulp Fiction 5. Siete pecados capitales 6. El maquinista'))

if(seleccionePelicula===1){
    alert('Selecciono "Volver Al Futuro"')
}else if(seleccionePelicula===2){
    alert('Selecciono "El Club De La Pelea"')
}else if(seleccionePelicula===3){
    alert('Selecciono "El Sexto Sentido"')
}else if(seleccionePelicula===4){
    alert('Selecciono "Pulp Fiction"')
}else if(seleccionePelicula===5){
    alert('Selecciono "Siete Pecados Capitales"')
}else if(seleccionePelicula===6){
    alert('Selecciono "El Maquinista"')
}else{
    alert('Error al seleccionar, vuelva a intentarlo')
}

let desicion = parseInt(prompt('Desea comprar entradas "1.si  2.no"?'))
let entrada = parseInt(prompt('Cuantas entradas desea comprar?'))
let resultado = 890

if(desicion===no){
    alert('Muchas gracias por su visita')
}
for(let entrada=1; entrada<=50; entrada++){
    if(entrada===1){
        alert(`El total de su compra es ${resultado} por 1 entrada`)
    } else if(entrada===2){
        alert(`El total de su compra es ${resultado*2} por 2 entradas`)
    }else if(entrada===3){
        alert(`El total de su compra es ${resultado*3} por 3 entradas`)
    }
}
