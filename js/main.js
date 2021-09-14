import burger from './burger/burger.js';

window.addEventListener('DOMContentLoaded', () => {
    burger();

    let codeBlock = document.querySelector('.task-right');
    let showButton = document.querySelector('#show-btn');

    showButton.addEventListener('click', (e) => {
        e.preventDefault();
        showButton.classList.toggle('show-code');

        if (showButton.classList.contains('show-code')) {
            showButton.innerHTML = "Hide code!";
            codeBlock.style.opacity = '1';
        } else {
            showButton.innerHTML = "Show code!";
            codeBlock.style.opacity = '0';
        }
    });
});