// Code your solutions in this file

function writeCards(names, event){
    const messages = [];
    for(let x = 0; x < names.length; x++) {
        messages.push(`Thank you, ${names[x]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(number){
    while(number>=0){
        console.log(number);
        number--;
    }
}