function checkNum(str) {
    let vowels = 'aeiou';
    let consonants = 'bcdfghjklmnpqrstvwxyz';

    let vowelNum = 0;
    let consNum = 0;

    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j <vowels.length; j++) {
            if(str[i] === vowels[j]){
                vowelNum++;
            }
        } for( let n = 0; n < consonants.length; n++) {
            if(str[i] === consonants[n]) {
                consNum++
            }
        }
        
    }
    if(vowelNum > consNum) {
        console.log('Vowels Wins');
    } else if(vowelNum < consNum) {
        console.log('Consonants Wins')
    } else{
        console.log('Draw');
    }
}

checkNum('Learning Javascript');

/*function maxChar(str) {
    let freqCounter = {};
    let lcStr = str.toLowerCase();
    for(let char of lcStr) {
        freqCounter = freqCounter[char] + 1 || 1;
    }
    return freqCounter
}
console.log(maxChar('Chiamaka'));*/
