import validator from './validator.js';

const btnRegistry = document.getElementById('btnRegistry');
const containerInvalidCard = document.getElementById('containerInvalidCard');
const containerEmpty = document.getElementById('containerEmpty');
const containerForm = document.getElementById('frmContainer');
const containerVerifyRegistration = document.getElementById('containerVerifyRegistration');

btnRegistry.addEventListener('click', () => {

    let creditCardNumber = (document.getElementById('txtCreditCardNumber').value).trim();
    let cardValidation = validator.isValid(creditCardNumber);
    let maskedCard = validator.maskify(creditCardNumber);

    let txtFullName = document.getElementById('txtFullName').value;
    let txtPhone = document.getElementById('txtPhone').value;
    let txtEmail = document.getElementById('txtEmail').value;

    if(creditCardNumber.length === 0)
    {
        containerEmpty.classList.remove('clsContainerNone');
        containerInvalidCard.classList.add('clsContainerNone');
    }
    else if(cardValidation === true)
    {
        containerVerifyRegistration.classList.remove('clsContainerNone');
        containerForm.classList.add('clsContainerNone');
        
        let showFullName = document.getElementById('showFullName');
        let showPhone = document.getElementById('showPhone');
        let showEmail = document.getElementById('showEmail');
        let showCreditCardNumber = document.getElementById('showCreditCardNumber');

        showFullName.innerHTML = txtFullName;
        showPhone.innerHTML = txtPhone;
        showEmail.innerHTML = txtEmail;
        showCreditCardNumber.innerHTML = maskedCard;
    }
    else {
        containerInvalidCard.classList.remove('clsContainerNone');
        containerEmpty.classList.add('clsContainerNone');
    }
});

