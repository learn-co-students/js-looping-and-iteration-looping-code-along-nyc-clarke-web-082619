function writeCards(names, eventName) {
    let arr = [];
    for(let i=0; i < names.length; i+=1) {
        arr.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return arr 
}

function countdown(integer) {
    let i = integer;
    while (i >= 0) {
        console.log(i);
        i -= 1;
    }
}
