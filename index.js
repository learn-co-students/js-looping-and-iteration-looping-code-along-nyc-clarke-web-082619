function writeCards(names, event) {
    let thankYouMessages = []; 
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouMessages
}

function countdown(num) {
    while( num > 0 ){
        console.log(num);
        num -= 1;
    }
    console.log(num);
}