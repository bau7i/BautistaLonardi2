//Creo funcion para calcular edad, restando año actual con año de nacimiento

function calcularEdad(anioActual, anioNacimiento){
	const edad = (anioActual - anioNacimiento);
	return edad;
}

//Hago 2 prompt, el usuario ingresa año actual y su año natal 

const anioNacimiento = prompt('En que anio naciste?');
const anioActual = prompt('Ingrese el anio actual');

alert('Tenes ' + calcularEdad(anioActual,anioNacimiento) + ' anios');