let a = ''

for(i=0; i<=100000; i++){
  if( i%6 === 0){
    a += i + '\n';
  }
}

document.body.innerHTML = a;