const div = document.querySelector('div');
console.log(div);
for(let i=1; i <= 1000000; i++) {
	div.innerHTML = ((i%6 === 0) ? write(i) : i++);
}