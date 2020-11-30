document.body.style.backgroundColor = 'ghostwhite';

const form = document.forms[0];

const fieldset = document.querySelector('fieldset');
fieldset.style.width = '200px';
fieldset.style.heigth = '1000px';
fieldset.style.display = 'flex';
fieldset.style.flexDirection = 'column';

const result = document.querySelector('.sin')

form.onsubmit = (element)=>{
 element.preventDefault();
 result.innerHTML = 'Sin' + '('+ form.elements.number.value + ')' + ' = ' + Math.sin(form.elements.number.value);
}