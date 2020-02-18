import validator from './validator.js';

const btnRegistry = document.getElementById('btnRegistry');
const containerInvalidCard = document.getElementById('containerInvalidCard');
const containerForm = document.getElementById('frmContainer');
const containerVerifyRegistration = document.getElementById('containerVerifyRegistration');

containerInvalidCard.style.display = 'none';
containerForm.style.display = 'block';
containerVerifyRegistration.style.display = 'none';

btnRegistry.addEventListener('click', () => {

    let creditCardNumber = document.getElementById('txtCreditCardNumber').value;
    let cardValidation = validator.isValid(creditCardNumber);
    let maskedCard = validator.maskify(creditCardNumber);

    let txtFullName = document.getElementById('txtFullName').value;
    let txtAddress = document.getElementById('txtAddress').value;
    let txtPhone = document.getElementById('txtPhone').value;
    let txtEmail = document.getElementById('txtEmail').value;

    if(cardValidation === true)
    {
        containerVerifyRegistration.style.display = 'block';
        containerForm.style.display = 'none';

        let showFullName = document.getElementById('showFullName');
        let showAddress = document.getElementById('showAddress');
        let showPhone = document.getElementById('showPhone');
        let showEmail = document.getElementById('showEmail');
        let showCreditCardNumber = document.getElementById('showCreditCardNumber');

        showFullName.innerHTML = txtFullName;
        showAddress.innerHTML = txtAddress;
        showPhone.innerHTML = txtPhone;
        showEmail.innerHTML = txtEmail;
        showCreditCardNumber.innerHTML = maskedCard;
    }
    else{
        containerInvalidCard.style.display = 'block';
        creditCardNumber = '';
    }
});

console.log(validator);
