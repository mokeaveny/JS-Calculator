////////////////////////////

const container = document.getElementById("container");
const display = document.getElementById("display");
const buttons = document.getElementById("buttons");

display.textContent = "0";

container.appendChild(display);
container.appendChild(buttons);

buttons.addEventListener("click", (e) => {
	if (e.target.matches('button'))
	{
		const key = e.target
		const action = key.dataset.action
		console.log(action); // Ouputs undefined if it is a number.
		console.log(key); // Shows the element that is clicked within the buttons div of the document.
		
		if (!action) { // If the action is undefined then output number key!
			console.log("number key!");
		}
		if (action == "add" || action == "subtract" || action == "multiply" || action == "divide") {
			console.log("operator key!");
		}
		if (action == "clear") {
			console.log("Clear key!")
		}
		if (action == "calculate") {
			console.log("Calculate key!")
		}
	}
})



////////////////////////////

function currentDisplay(theButton)
{
	alert(theButton.value);
}

function add(num1, num2)
{
	return (num1 + num2);
}

function subtract(num1, num2)
{
	return (num1 - num2);
}

function multiply(num1, num2)
{
	return (num1 * num2);
}

function divide(num1, num2)
{
	return (num1 / num2);
}

function operate(operator, num1, num2)
{
	if (operator == "+")
	{
		return add(num1, num2)
	}
	else if (operator == "-")
	{
		return subtract(num1, num2)
	}
	else if (operator == "*")
	{
		return multiply(num1, num2)
	}
	else if (operator == "/")
	{
		return divide(num1, num2)
	}
	else
	{
		return "Not a valid operator";
	}
}

