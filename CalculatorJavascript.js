////////////////////////////

const container = document.getElementById("container");
const display = document.getElementById("display");
const buttons = document.getElementById("buttons");

container.appendChild(display);
container.appendChild(buttons);



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

