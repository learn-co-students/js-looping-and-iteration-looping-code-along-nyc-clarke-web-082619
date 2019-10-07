// Code your solutions in this file


function writeCards(arr, occasion) {
    let thankYouCards = []
    for (let i = 0;i < arr.length; i++) {
          thankYouCards.push(`Thank you, ${arr[i]}, for the wonderful ${occasion} gift!`);
        }

        return thankYouCards;
}

function countdown(num){
    while (num > 0){
        console.log(num--);
    }
    console.log(num);
}
