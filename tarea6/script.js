//Creo una constante con un objeto $numeros y le asocio la seleccion del boton.
const $numeros = document.querySelector('.button');
//Creo la funcion de click en el boton con el objeto $numeros
$numeros.onclick = function(){
	// Creo la variable de nums con numeros random hasta 10 y con Math.floor que los redondea a enteros
	let nums = Math.floor(Math.random() * 10);
	//Aca al texto de h1 (NUMEROS) lo cambio por los numeros randoms anteriores
	document.querySelector('h1').innerText = nums;

	return false;
}