const number = document.querySelector('body');
let answer = Number(prompt('Type any number to get its absolute value'));

if(answer >= 0) {
 number.innerHTML = '|' + answer + '|';
}else if(answer < 0) {
 number.innerHTML = '|' + answer * -1 + '|';
}