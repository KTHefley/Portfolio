const button = document.querySelector("button");
const output = document.querySelector(".output");
console.log(button);
button.addEventListener("click",function(){
	const cost = document.querySelector("input");
	const tipPercent = document.querySelector("input[target]");
	console.log(cost.value*(tipPercent.value/"100"));
	let tip = (cost.value*(tipPercent.value/"100")).toFixed(2);
	let temp = `<h1>You should Tip $${tip} on $${cost.value} </h1>`;
	output.innerHTML = temp;
})