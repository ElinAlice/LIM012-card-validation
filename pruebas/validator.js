    const numberSum = (acumulator, currentValue ) => parse(acumulator) + parseInt(currentValue);
    let arr = [2,3,4];
    console.log(arr.reduce(numberSum));

    const isValid = () =>{
    let numberCard = [4,1,3,7,8,9,4,7,1,1,7,5,5,9,0,4];
    numberCard.reverse();
    console.log(numberCard);

    for(i = 0 ; i < numberCard.length; i++)
    {
      //console.log(i + ' '+ numberCard);
      // obteniendo posicion
      if(i % 2 !== 0)
      {
        
        let doubleNumber = numberCard[i] * 2;
        let converterString = doubleNumber.toString().split(',');
        let digitSum = converterString.reduce(numberSum);
        
        console.log(digitSum);
        
        
      }
      /*if (i % 2 === 0)
      {
        
        console.log(i+ ' '+ numberCard[i-1]);
        //let doubleNumber = numberCard[i] * 2;
        //console.log(doubleNumber);
      }*/
    }
};
isValid();

