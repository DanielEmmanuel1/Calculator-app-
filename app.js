const displayContainer = document.querySelector('.display-container');
const displayContent = document.getElementById('display-content');
const allButtons = document.querySelectorAll('button');



let input = '';
let calculationPerformed = false;

allButtons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === 'C') {
            input = '';
            displayContent.textContent = '';
            calculationPerformed = false;
        } else if (buttonText === '←') {
            if (input.length > 0) {
                input = input.slice(0, -1);
                displayContent.textContent = displayContent.textContent.slice(0, -1);
            }
        } else if (buttonText === '=') {
            try {
                input = eval(input);
                const resultSpan = document.createElement('span');
                resultSpan.textContent = input;
                resultSpan.style.color = 'black';
                resultSpan.style.fontSize = '25px';
                displayContent.textContent = '';
                displayContent.appendChild(resultSpan);
                calculationPerformed = true;
            } catch (error) {
                displayContent.textContent = 'Error';
                calculationPerformed = false;
            }
        } else if (['+', '-', '*', '/', '%'].includes(buttonText)) {
            if (calculationPerformed) {
                // Allow operators after calculation
                input = input.toString(); // Convert the result to a string
                input += buttonText;
                displayContent.textContent += buttonText;
                calculationPerformed = false;
            } else {
                input += buttonText;
                displayContent.textContent += buttonText;
            }
        } else {
            if (calculationPerformed) {
                input = buttonText;
                displayContent.textContent = buttonText;
                calculationPerformed = false;
            } else {
                input += buttonText;
                displayContent.textContent += buttonText;
            }
        }
    });
});
