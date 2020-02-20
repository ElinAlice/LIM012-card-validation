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

  if(creditCardNumber.length > 16)
  {
    return false;
  }
  else
  {
    let inverterCard = creditCardNumber.split('').reverse();

    for(let i = 0 ; i < inverterCard.length; i++)
    {
      if(i % 2 !== 0)
      {
        let doubleNumber = inverterCard[i] * 2;
        let arrayDoubleNumber = doubleNumber.toString().split('');
        let digitSum = validator.numberSum(arrayDoubleNumber);
        inverterCard[i] = digitSum.toString();
      }
    }

    let totalAmount = validator.numberSum(inverterCard);
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
      }
    }
  
    for(let i = 0 ; i < numberCard.length; i++)
    {
      acumulate += numberCard[i];
    }
    return acumulate;
  }

};

export default validator;
