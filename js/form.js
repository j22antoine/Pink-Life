let form = document.getElementById("form");

form.onsubmit = function(){
let inputs = Object.fromEntries([...form.children].filter(e=>e.localName=="input"&&e.placeholder).map(e=>[e.placeholder,e.value]));

for(key in inputs) alert(key+": "+inputs[key]);
}
