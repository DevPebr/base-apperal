const emailInput = document.getElementById('email');
const btn = document.getElementById('btn-submit');
const iconError = document.querySelector('.error-icon');
const pHidden = document.querySelector('.transparent-p');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;



btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(emailInput.value);
    if(!emailRegex.test(emailInput.value)) {
        iconError.classList.remove('hidden');
        pHidden.classList.remove('hidden');
    }

    else if(emailRegex.test(emailInput.value)) {
        iconError.classList.add('hidden');
        pHidden.classList.add('hidden');
    }

})