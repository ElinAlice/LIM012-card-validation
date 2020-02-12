    /*const numberSum = (acumulator, currentValue ) => parse(acumulator) + parseInt(currentValue);
    let arr = [2,3,4];
    console.log(arr.reduce(numberSum));*/

    const numberSum = (numberDigit) =>{
      console.log('numero aun no convertido ' + numberDigit)
      let partConverter = numberDigit.toString().split('');
      let accumulate = 0;
      console.log('Numero convertido '+partConverter)
      console.log('tamaño array: '+ partConverter.length)
      for(i = 0 ; i < partConverter.length; i++)
      {
        accumulate += parseInt(partConverter[i]);
        console.log('posicion en suma ' + i);
      }
      return 'suma ' + accumulate;
    }
  
    let creditCardNumber = prompt('Ingrese su N° de Tarjeta: ')
    console.log(creditCardNumber);
    
    
    const isValid = (creditCardNumber) =>{
    console.log(creditCardNumber);
    let inverterCard = creditCardNumber.split('').reverse();
    console.log(inverterCard);
    console.log('tamaño array: '+ inverterCard.length)
    for(i = 0 ; i < inverterCard.length; i++)
    {
      // obteniendo posicion
      if(i % 2 !== 0)
      {
        let doubleNumber = inverterCard[i] * 2;
        console.log(i + ' ' + doubleNumber);
        
        let digitSum = numberSum(doubleNumber);
        console.log(digitSum);
        console.log('posicion en funcion general '+i);
      }
    }
};
isValid(creditCardNumber);

