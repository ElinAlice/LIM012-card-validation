    /*const numberSum = (acumulator, currentValue ) => parse(acumulator) + parseInt(currentValue);
    let arr = [2,3,4];
    console.log(arr.reduce(numberSum));*/

const numberSum = (numberDigit) => {
  let accumulate = 0;
  
  for(let i = 0 ; i < numberDigit.length; i++)
  {
    accumulate += parseInt(numberDigit[i]);
  }

  return accumulate;
};
  
const isValid = (creditCardNumber) => {
  // console.log(creditCardNumber);
  let inverterCard = creditCardNumber.split('').reverse();
  console.log(inverterCard);
  console.log('tamaño array: '+ inverterCard.length)

  for(let i = 0 ; i < inverterCard.length; i++)
  {
    // obteniendo posicion
    if(i % 2 !== 0)
    {
      let doubleNumber = inverterCard[i] * 2;
      console.log(i + ' ' + doubleNumber);
      
      let arrayDoubleNumber = doubleNumber.toString().split('');

      let digitSum = numberSum(arrayDoubleNumber);
      console.log(digitSum);
    }
    console.log('posicion en funcion general '+i);
    console.log(inverterCard);
  }
};

    
const maskify = (creditCardNumber) => {
  let numberCard = creditCardNumber.toString().split('');
  let acumulate = 0;

  for(i = 0 ; i < numberCard.length ; i++)
  {
    console.log(numberCard[i])
    numberCard[i] = '#';
    //let numberMaskify = creditCardNumber.replace(numberCard[i],'#')
    acumulate += numberCard[i];
    //console.log(numberMaskify)
    console.log(acumulate);
  }
  console.log(acumulate);
}
    

// Llamando funciones

let creditCardNumber = prompt('Ingrese su N° de Tarjeta: ')

// console.log(creditCardNumber);
isValid(creditCardNumber);

// maskify(creditCardNumber)
