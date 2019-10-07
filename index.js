// Code your solutions in this file
// for ([initialization]; [condition]; [iteration]) {
//     [loop body]
// }

// const gifts = ["teddy bear", "drone", "doll"];
 
// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
 
//   return gifts;
// }
 
// wrapGifts(gifts);

function writeCards(names, event) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++){
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards
}

// while ([condition]) {
//     [loop body]
//   }

// const gifts = ["teddy bear", "drone", "doll"];
 
// function wrapGifts(gifts) {
//   let i = 0; 
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++; 
//   }
 
//   return gifts;
// }
 
// wrapGifts(gifts);

function countdown(countdown) {
    while( countdown > 0 ) {
        console.log( countdown );
        countdown -=1;
    }
    console.log( countdown );
}

// function countdown( countdown ) {
//     while ( countdown > 0 ) {
//       console.log( countdown );
//       countdown -= 1;
//     }
//     console.log( countdown );
//   }