const fieldset = document.querySelector('.fieldset')
fieldset.style.width = '200px';
fieldset.style.display = 'flex';
fieldset.style.flexDirection = 'column';
fieldset.style.alignItems = 'center';

const form = document.forms[0];
const heading = document.querySelector('.result-heading');
const result = document.querySelector('.result');
const APIKey = '099690a2a2a8bd7843429919925e6357';

let xhr = new XMLHttpRequest();

form.onsubmit = (e)=>{
  e.preventDefault();
  let city = form.elements.city.value;
  let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid='+APIKey;
  xhr.open('GET', url, false);
  xhr.send();
 if(xhr.status != 200) {
  console.log(xhr.status +' '+ xhr.statusText)
} else {
  let DATA = JSON.parse(xhr.responseText);
  console.log(DATA);
  heading.innerHTML = 'Today\'s weather in ' + String(city) +' is listed below'
  result.innerHTML = 'Temperature: ' + (parseInt(DATA.main.temp) - 273) + '°C' + '\r\n' + "Humidity: " + DATA.main.humidity + '%' + '\r\n' + 'Wind: ' + DATA.wind.speed + ' m/s';  
}
  console.log(city)
}