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

console.log(crypto)

function addName(name) {
 var addName = document.createElement('h2')
 addName.innerHTML = name
 document.body.appendChild(addName)
}

function addPrice(price) {
 var addPrice = document.createElement('p')
 addPrice.innerHTML = `${price} $`
 document.body.appendChild(addPrice)
}

function addBar(price, r) {
 var addBar = document.createElement('div')
 addBar.className = 'price-bar'
 addBar.style.backgroundColor = `rgb(${r},100,0)`
 addBar.style.height = '30px'
 addBar.style.width = `${price}%`
 document.body.appendChild(addBar)
}

for(let i=0; i < crypto.length; i++){
 addName(crypto[i].name);
 addPrice(crypto[i].price);
 addBar((crypto[i].price*100/crypto[0].price),(100*i));
}