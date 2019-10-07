// Code your solutions in this file

function writeCards(cards, eventName) {
    let thankYouCards = []
    for (let i = 0; i < cards.length; i++) {
        thankYouCards.push(`Thank you, ${cards[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankYouCards
}

function countdown(integer) {
    while (integer >= 0) {
        console.log(integer); integer -= 1;
    }
}