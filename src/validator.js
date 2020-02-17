const validator = {
  numberSum : (numberDigit) => {
    let accumulate = 0;
      
    for(let i = 0 ; i < numberDigit.length; i++)
    {
      accumulate += parseInt(numberDigit[i]);
    }
  
    return accumulate;
  },

  isValid : (creditCardNumber) => {
  // console.log(creditCardNumber.length);
  if(creditCardNumber.length > 16)
  {
    console.log('Vuelva a Ingresar')
    return false;
  }
  else
  {
    let inverterCard = creditCardNumber.split('').reverse();
    console.log(inverterCard);
    // console.log('tamaño array: '+ inverterCard.length)

    for(let i = 0 ; i < inverterCard.length; i++)
    {
      if(i % 2 !== 0)
      {
        let doubleNumber = inverterCard[i] * 2;
        // console.log(i + ' ' + doubleNumber);
        
        let arrayDoubleNumber = doubleNumber.toString().split('');

        let digitSum = validator.numberSum(arrayDoubleNumber);
        // console.log(digitSum);
        inverterCard[i] = digitSum.toString();
      }
    }
    // console.log(inverterCard)
    let totalAmount = validator.numberSum(inverterCard);
    // console.log(totalAmount);
    if(totalAmount % 10 === 0)
    {
      return true;
    }
    else {
      return false;
    }
  }
  },

  maskify : (creditCardNumber) => {
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
        console.log(i + ' ' + numberCard[i]);
      }
    }
  
    for(let i = 0 ; i < numberCard.length; i++)
    {
      acumulate += numberCard[i];
    }
    console.log('Tu numero de tarjeta es: '+acumulate);
    console.log(numberCard);
    return acumulate;
  }

};

export default validator;
