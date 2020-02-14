import validator from './validator.js';

const btnRegistry = document.getElementById('btnRegistry');

btnRegistry.addEventListener('click', () => {
    let miTarjetaValida = validator.isValid('4083952015263');
    let miTarjeta = validator.maskify('4083952015263');
    console.log(miTarjetaValida);
    console.log(miTarjeta);
});

console.log(validator);
