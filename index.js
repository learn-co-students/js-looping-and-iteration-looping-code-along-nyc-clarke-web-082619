// Code your solutions in this file
const countdown = (num) => {
    while (num >= 0) {
        console.log(num--)
    }
}

const writeCards = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
    }
    return newArray
}