    /*const numberSum = (acumulator, currentValue ) => parse(acumulator) + parseInt(currentValue);
    let arr = [2,3,4];
    console.log(arr.reduce(numberSum));*/

    const numberSum = (numberDigit) =>{
      let partConverter = numberDigit.toString().split('');
      let accumulate = 0;
      for(i = 0 ; i < partConverter.length; i++)
      {
        accumulate += parseInt(partConverter[i]);
      }
      return accumulate;
    }


    let creditCardNumber = prompt('Ingrese su N° de Tarjeta: ')
    console.log(creditCardNumber);
    
    
    const isValid = (creditCardNumber) =>{
    console.log(creditCardNumber);
    let inverterCard = creditCardNumber.split('').reverse();
    console.log(inverterCard);

    for(i = 0 ; i < inverterCard.length; i++)
    {
      // obteniendo posicion
      if(i % 2 !== 0)
      {
        let doubleNumber = inverterCard[i] * 2;
        console.log(i + ' ' + doubleNumber);
        
        //let digitSum = numberSum(doubleNumber);
        //console.log(digitSum);
      }
    }
};
isValid(creditCardNumber);

