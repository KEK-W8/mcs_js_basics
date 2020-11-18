const number = document.querySelector('body');
number.style.backgroundColor ='rgb(156, 116, 105)';


let totalCash = Number(prompt('Skolko seichas deneg est? (dollarov)'));
let watchesCount = Number(prompt('Skolko watches hochetsa kupit? (shtook)'));
let earringsCount = Number(prompt('Skolko serejek hochetsa kupit? (shtook)'));

let watchesSum = Number(prompt('Skolko stoyat odin watches? (dollarov)') * parseInt(watchesCount));
let earringsSum = Number(prompt('Skolko stoyat odin serejka? (dollarov)') * parseInt(earringsCount));

document.write(totalCash >= watchesSum + earringsSum);