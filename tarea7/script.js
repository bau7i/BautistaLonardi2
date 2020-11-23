const $botonRojo = document.querySelector('.rojo');
const $botonAzul = document.querySelector('.azul');
const $botonAmarillo = document.querySelector('.amarillo');

$botonRojo.onclick = function(){
	document.querySelector('.texto').style.color = "red";
}

$botonAzul.onclick = function(){
	document.querySelector('.texto').style.color = "blue";
}

$botonAmarillo.onclick = function(){
	document.querySelector('.texto').style.color = "yellow";
}