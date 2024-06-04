'use strict';

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function calculate() {
  const num1Element = document.getElementById('num1');
  const num2Element = document.getElementById('num2');
  const operator = document.getElementById('operator').value;
  let result;

  // Validate inputs
  if (num1Element.value === '' || num2Element.value === '') {
    document.getElementById('result').innerText =
      'Error: Both numbers are required.';
    return;
  }

  // Parse the input values to floats
  const parsedNum1 = parseFloat(num1Element.value);
  const parsedNum2 = parseFloat(num2Element.value);

  try {
    switch (operator) {
      case 'add':
        result = add(parsedNum1, parsedNum2);
        break;
      case 'subtract':
        result = subtract(parsedNum1, parsedNum2);
        break;
      case 'multiply':
        result = multiply(parsedNum1, parsedNum2);
        break;
      case 'divide':
        result = divide(parsedNum1, parsedNum2);
        break;
      default:
        result = 'Invalid operator';
    }
    document.getElementById('result').innerText = `Result: ${result}`;
  } catch (error) {
    document.getElementById('result').innerText = `Error: ${error.message}`;
  }
}
