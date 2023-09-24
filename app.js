const displayBoard = document.querySelector('.content-board');
const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('AC') || button.classList.contains('equal')) {
            // Do nothing for AC and equal buttons
            return;
        }
        const buttonText = button.textContent;
        const textNode = document.createTextNode(buttonText);
        const span = document.createElement('span');
        span.appendChild(textNode);
        span.style.color = 'white';
        span.style.fontSize = '25px';
        span.style.paddingRight = '5px';
        displayBoard.appendChild(span);

        // ac button
        const refreshButton = document.querySelector('.AC')
        refreshButton.addEventListener('click', () => {
            displayBoard.textContent = '';
        });
    });
});