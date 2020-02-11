  const isValid = () =>{
    let numberCard = [1,2,3,4,8,9,3,5,6,7,,6,6,7,2,2];
    numberCard.reverse();
    console.log(numberCard);

    for(i = 1 ; i <= numberCard.length; i++)
    {
      console.log(i);
    }
};

isValid();

