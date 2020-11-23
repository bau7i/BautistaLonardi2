
const $sumaNum = document.querySelector('.button');

$sumaNum.onclick = function(){
	const numero1 = Number(document.querySelector('#num1').value);
	const numero2 = Number(document.querySelector('#num2').value);
	let total;
	total = numero1 + numero2;
	alert(`La suma de ${numero1} + ${numero2} es ${total}`);

	return false;
}