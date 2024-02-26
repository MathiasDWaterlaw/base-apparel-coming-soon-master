const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submit-btn');

const invalidContainer = document.getElementById('invalid-container');
const iconError = document.getElementById('icon-error');


submitButton.addEventListener('click', () => {
    const email = emailInput.value;
        invalidContainer.className = 'hidden';
        iconError.className = 'hidden';
        emailInput.style.border = '1px solid var(--desaturated-red)';

    if(!emailRegex.test(email)) {
        invalidContainer.classList.remove('hidden');
        iconError.classList.remove('hidden');
        emailInput.style.border = '2px solid var(--soft-red)';
    }
});