
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
    if(i % 2 !== 0)
    {
      let doubleNumber = inverterCard[i] * 2;
      console.log(i + ' ' + doubleNumber);
      
      let arrayDoubleNumber = doubleNumber.toString().split('');

      let digitSum = numberSum(arrayDoubleNumber);
      console.log(digitSum);
      inverterCard[i] = digitSum.toString();
    }
  }
  console.log(inverterCard)
  let totalAmount = numberSum(inverterCard);
  console.log(totalAmount);
  if(totalAmount % 10 === 0)
  {
    console.log(true);
  }
  else{
    console.log(false);
  }
};

    
const maskify = (creditCardNumber) => {
  let numberCard = creditCardNumber.toString().split('');
  let acumulate = '';

  for( let i = numberCard.length - 1 ; i >= 0 ; i--)
  {
    if(i > numberCard.length - 5)
    {
      console.log(i + ' '+numberCard[i]);
    }
    else{
      numberCard[i] = '#';
      //acumulate += numberCard[i]
      console.log(i + ' ' + numberCard[i]);
    }
  }
  
  numberMaskify = numberCard.join('');
  console.log(numberMaskify);

  for(let i = 0 ; i < numberCard.length; i++)
  {
    acumulate += numberCard[i];
  }
  console.log('Tu numero de tarjeta es: '+acumulate);
  console.log(numberCard);
  

}
    

// Llamando funciones

let creditCardNumber = prompt('Ingrese su N° de Tarjeta: ')

// console.log(creditCardNumber);
isValid(creditCardNumber);

maskify(creditCardNumber)
