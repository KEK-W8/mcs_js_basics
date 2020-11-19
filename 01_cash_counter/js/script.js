const body = document.querySelector('body');
body.style.backgroundColor ='rgb(156, 116, 105)';
body.style.fontSize = '4rem';

const haveEnough = (totalCash, watchesCount, watchesPrice, earringsCount, earringsPrice) => {
 let watchesSum = watchesPrice * watchesCount;
 let earringsSum = earringsPrice * earringsCount;
 let result = (totalCash >= watchesSum + earringsSum)? 'Enough $$$': 'Not enough $$$';
 return result;
}

document.write(haveEnough(500, 1, 250, 1, 250));