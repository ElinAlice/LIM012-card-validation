import validator from './validator.js';

const btnRegistry = document.getElementById('btnRegistry');

btnRegistry.addEventListener('click', () => {

    let creditCardNumber = document.getElementById('txtCreditCardNumber').value;
    console.log(creditCardNumber);
    let cardValidation = validator.isValid(creditCardNumber);
    let maskedCard = validator.maskify(creditCardNumber);
    
    if(cardValidation === true)
    {
        alert('Tu tarjeta es: ' + maskedCard);
    }
    else{
        alert('Tu tarjeta es invalida vuelve a ingresarla');
    }
});

console.log(validator);
