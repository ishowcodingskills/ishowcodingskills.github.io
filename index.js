const displayScreen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');

var firstNumber;
var secondNumber;
var currentOperator;

function resetValues() {
    firstNumber = undefined;
    secondNumber = undefined;
    currentOperator = undefined;
}

function clearDisplay() {
    displayScreen.textContent = 0;
}

buttons.forEach(button => {
    if (button.className == 'operator') {
        button.addEventListener('click', () => {
            if (undefined === firstNumber && button.value != '-') {
                console.log('not minus')
                return;
            }
            
            if (undefined === currentOperator) {
                currentOperator = button.value;
            }
        });
    } else if (button.className === 'digit') {
        button.addEventListener('click', () => {
            if (displayScreen.textContent === '0') {
                displayScreen.textContent = button.value;
            } else {
                displayScreen.append(button.value);
            }
        });
    } else if (button.className === 'clear-btn') {
        button.addEventListener('click', clearDisplay);
    } else if (button.className === 'decimal') {
        button.addEventListener('click', () => {
            if (false === displayScreen.textContent.includes('.')) {
                displayScreen.append('.');
            }
        });
    } else {
        button.addEventListener('click', () => {
            if ('+' === currentOperator) {
                
            }
        });
    }
});