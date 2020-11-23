<<<<<<< HEAD
script.js
=======
const $accion = document.querySelector('.button');
//Agrego funcion onclick al boton;
$accion.onclick = function(){
	//Selecciono el em del HTML;
	const colorRadio = document.querySelector('.emColor');
	//Creo una variable y selecciono el input con nombre color que esté con el check y tomo el valor;
	const radioChecked = document.querySelector('input[name=color]:checked').value;
	//Agrego en el texto del em, el escrito y el valor de la variable creada anteriormente;
	colorRadio.innerText = (` El color seleccionado es ${radioChecked}`);
}
>>>>>>> 556305014d54803dc91c881a11acca5cfa07875b
