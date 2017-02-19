/**
 * Created by plter on 2/17/17.
 */

let originalLower = "abcdefghijklmnopqrstuvwxyz";
let originalUpper = "ABCDEFJHIJKLMNOPQRSTUVWXYZ";
let originalNumber = "1234567890";

function getWords(original) {
    let words = "";
    let times = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < times; i++) {
        words += original.charAt(Math.floor(Math.random() * original.length));
    }
    return words;
}

let words = getWords(originalNumber) + getWords(originalLower) + getWords(originalUpper);
let wordsArr = words.split("");

for (let i = 0; i < 200; i++) {
    let index = Math.floor(Math.random() * wordsArr.length);
    let w = wordsArr[index];
    wordsArr.splice(index, 1);
    wordsArr.push(w);
}

console.log(wordsArr.join(""));