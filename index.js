// Code your solutions in this file

function writeCards(nameArray, eventName) {
    let cardsArray = [];
    for (let i = 0; i < nameArray.length; i++){
        let message = `Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`;
        cardsArray.push(message);
    }
    return cardsArray;
}

function countdown(num){
    while (num >= 0) {
        console.log(num);
        num--;
    }
}