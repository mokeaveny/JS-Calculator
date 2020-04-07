////////////////////////////

const container = document.getElementById("container");
const display = document.getElementById("display");
const buttons = document.getElementById("buttons");

display.textContent = "0"; // Display 0 for the default number.

var firstNumber = "" // String 
var operator = ""
var secondNumber = ""; // String

container.appendChild(display);
container.appendChild(buttons);

buttons.addEventListener("click", (e) => {
	if (e.target.matches('button'))
	{
		const clickedButton = e.target
		const action = clickedButton.dataset.action
		const buttonContent = clickedButton.textContent
		const displayedNum = display.textContent
		console.log(action); // Ouputs undefined if it is a number.
		
		if (!action) { // If the action is undefined then output number key!
			if (displayedNum == "0" || display.textContent == "+" || display.textContent == "-" || display.textContent =="*" || display.textContent=="/") {
				display.textContent = buttonContent // If current display string is just "0" then we know we can start a number.
			}
			else {
				display.textContent = displayedNum + buttonContent // Append the button clicked to the currentNumber.
			}
		}

		if (action == "add" || action == "subtract" || action == "multiply" || action == "divide") {
			if (firstNumber == "")
			{
				firstNumber = display.textContent;
				console.log(firstNumber);
			}
			display.textContent = buttonContent;
			operator = clickedButton.textContent;
			console.log(operator);
		}
		if (action == "clear") {
			firstNumber = ""
			secondNumber = ""
			operator = ""
			display.textContent = "0"
		}
		if (action == "calculate") {
			if (firstNumber == "")
			{
				display.textContent = firstNumber;
			}
			else
			{
				firstNumber = Number(firstNumber) // Converts the firstNumber string to an integer value to be used in operation functions.
				secondNumber = display.textContent;
				secondNumber = Number(secondNumber) // Converts the secondNumber string to an integer value to be used in operation functions.
				if (isNaN(secondNumber))
				{
					firstNumber = firstNumber.toString() // Convert the firstNumber back to a string
					operator = "" // Reset operator
					secondNumber = "" // Reset secondNumber
					display.textContent = firstNumber;
				}
				else
				{
					result = operate(operator, firstNumber, secondNumber);
					if (isNaN(result)) // If the result is Nan ( 0 / 0 ) then display UNDEFINED
					{
						display.textContent = "UNDEFINED";
					}
					else
					{
						display.textContent = result;
						firstNumber = result.toString(); // Store the result as the firstNumber
						operator = "" // Reset the operator
						secondNumber = "" // Reset the secondNumber
					}
				}	
			}
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

