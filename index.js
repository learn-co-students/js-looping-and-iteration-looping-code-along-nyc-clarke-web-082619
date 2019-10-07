// Code your solutions in this file

function writeCards(names, gift) {
    const thank_array =[];
    for (let i = 0; i < names.length; ++i) {
        thank_array.push('Thank you, ' + names[i] +', for the wonderful ' + gift +  ' gift!');
    }
    return thank_array;
}


function countdown(count) {
    for (let i = count; i >= 0; --i) {
        console.log(i);
    }
}