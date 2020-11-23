const $sumar = document.querySelector('.button');

$sumar.onclick = function(){
	let num1 = 15;
	let num2 = 10;
	let total;
	total = num1 + num2;

	alert(`La suma de ${num1} + ${num2} es  ${total} `);
	return false;
}