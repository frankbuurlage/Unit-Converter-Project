let input = document.getElementById("input-el");

document.getElementById("convert-btn").addEventListener("click", function () {
	calculateResult();
});

function calculateResult() {
	let feet = input.value * 3.281;
	let meters = input.value / 3.281;
	let liters = input.value / 0.264;
	let gallons = input.value * 0.264;
	let kilograms = input.value * 2.204;
	let pounds = input.value / 2.204;

	document.getElementById("calculated-result-length").innerHTML = `${
		input.value
	} meters = ${feet.toFixed(2)} feet | ${input.value} feet = ${meters.toFixed(
		2
	)} meters`;
	document.getElementById("calculated-result-volume").innerHTML = `${
		input.value
	} liters = ${gallons.toFixed(2)} gallons | ${
		input.value
	} gallons = ${liters.toFixed(2)} liters`;
	document.getElementById("calculated-result-mass").innerHTML = `${
		input.value
	} kilos = ${pounds.toFixed(2)} pounds | ${
		input.value
	} pounds =  ${kilograms.toFixed(2)} kilos`;
}
