var input = document.getElementById("Input");
var list = document.getElementById("list");
var item = document.getElementById("item");
var array = [];
function Insert(){
    array.push(input.value);
    list.innerHTML = array;
}
function Select(){
selected = Math.floor(Math.random() * array.length);
item.innerHTML = array[selected];
}