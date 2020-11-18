/*Cоздать глобальную ф-ю greeting 
которая каждые 5000ms смотри в тег input с id='name' 
(получить при помощи document.querySelector('input[id="name"]'))  
которая каждые 5000ms смотри в тег input с id='name'  
(получить при помощи document.querySelector('input[id="name"]')) 
берет значение по ключу value и выводит сообщение преведствия из глобальной переменной greetingMessage.
alrt(greetingMessage + input.value)*/ 

var greetingMessage = "Hellow";
var input = {
    value: document.querySelector('input[id="name"]')
}

function greeting(greetingMessage) {
    alert(greetingMessage + " " + this.value.value);
}

setInterval(greeting.bind(input, greetingMessage), 5000);