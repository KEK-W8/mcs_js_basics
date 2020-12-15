window.onload = function(){
      class Person {
    constructor(name) {
      this.name = name;
      this.happiness = 0;
    };
    hasCat(){
      return ++this.happiness
    };
    ﻿hasRest(){
      return ++this.happiness
    };
    hasMoney(){
      return ++this.happiness
    };
    isSunny(){
      let city = form.elements.city.value;
      const APIKey = '099690a2a2a8bd7843429919925e6357';
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send();
      let DATA = JSON.parse(xhr.responseText);

      if ((parseInt(DATA.main.temp) - 273) > 15){
        return ++this.happiness
      } else {
        return this.happiness
      }
    }
  };
  const form = document.forms[0];

  form.onsubmit = (e)=>{
    e.preventDefault();
    let userName = form.elements.name.value;
    let catPresence = form.elements.cat.value;
    let restPresence = form.elements.rest.value;
    let moneyPresence = form.elements.money.value;

    let testUser = new Person(userName);

    (catPresence === 'yes') ? testUser.hasCat() : null;
    (restPresence === 'yes') ? testUser.﻿hasRest() : null;
    (moneyPresence === 'yes') ? testUser.hasMoney() : null;
    testUser.isSunny()

    const personName = document.querySelector('.personName');
    const icon = document.querySelector('.icon');
    personName.innerHTML = userName;
    if (testUser.happiness === 4) {
    icon.innerHTML = '😄'
    } else if (testUser.happiness === 3 || testUser.happiness === 2){
    icon.innerHTML = '😐' 
    } else {
    icon.innerHTML = '☹️'    
    }
  }
}