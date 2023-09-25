const displayContainer = document.querySelector('.display-container');
const displayContent = document.getElementById('display-content');
const displayBoard = displayContainer.querySelector('.content-board');
const allButtons = document.querySelectorAll('button');
let input = '';

allButtons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        const textNode = document.createTextNode(buttonText);
        const span = document.createElement('span');
        span.appendChild(textNode);
        span.style.color = 'white';
        span.style.fontSize = '25px';
        span.style.paddingRight = '5px';
        displayContent.appendChild(span);

        if (buttonText === 'AC') {
            input = '';
            displayContent.textContent = '';

        } else if (buttonText === '←') {
            input = input.slice(0, -1);
            displayContent.textContent = input;
            
        } else if (buttonText === '=') {
            try {
                input = eval(input);
                const resultSpan = document.createElement('span');
                resultSpan.textContent = input;
                resultSpan.style.color = 'white';
                resultSpan.style.fontSize = '25px';
                resultSpan.style.paddingRight = '5px';
                displayContent.appendChild(resultSpan);

            } catch (error) {
                displayContent.textContent = 'Error';
            }
        } else {
            input += buttonText;
        }

        const refreshButton = document.querySelector('.AC')
        refreshButton.addEventListener('click', () => {
            displayContent.textContent = '';
        });
    });
});