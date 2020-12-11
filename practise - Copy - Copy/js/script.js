let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
];

const divs = document.getElementsByTagName('div');
const values = document.querySelectorAll('.value')
const types =  document.getElementsByClassName('type');

for (div of divs) {
  div.style.backgroundColor = "blue";
  div.style.width = '400px';
  div.style.height = '30px';
  div.style.marginBottom = '20px'
}

const names = crypto.map(currencyName =>{
  return currencyName.name
})

const prices = crypto.map(currencyPrice => {
  return parseInt(currencyPrice.price);
})

for(i=0; i<divs.length; i++){
  types[i].innerHTML = names[i];
  values[i].innerHTML = prices[i] + ' $';
  divs[1].style.width = (prices[1] * 400 / prices[0]) + 'px';
  divs[1].style.backgroundColor = 'red';
  divs[2].style.width = (prices[2] * 400 / prices[0]) + 'px';
  divs[2].style.backgroundColor = 'green';
}
