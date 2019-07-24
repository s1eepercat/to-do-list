input = document.querySelector("#input");
button = document.querySelector("#button");
list = document.querySelector("#list");

function inputValueLength() {
  return input.value.length
}

function add_p_EventListener(p) {
  p.addEventListener("click",function(){
    p.classList.toggle("done");
  })
}

function createDeleteButton(li) {
  var b = document.createElement("button");
  b.classList.add("delete-button");
  b.addEventListener("click", function(){
    list.removeChild(li);
  })
  return b;
}

function addLiElement() {
  var li = document.createElement("li");
  list.appendChild(li);
  var div = document.createElement("div");
  div.classList.add("flex-list");
  li.appendChild(div);
  var p = document.createElement("p");
  p.appendChild(document.createTextNode(input.value));
  div.appendChild(p);
  div.appendChild(createDeleteButton(div.parentElement));
  input.value = "";
  return p;
}


function addItemOnClick() {
  if (inputValueLength() > 0) {
    add_p_EventListener(addLiElement());
  }
}

function addItemOnPress(event) {
  if (inputValueLength() > 0 && event.keyCode === 13) {
    add_p_EventListener(addLiElement());
  }
}

button.addEventListener("click",addItemOnClick);
input.addEventListener("keypress",addItemOnPress);
