// code

var myList = document.getElementById("checklist");

var myListItems = myList.querySelectorAll("li");
var myInputs = myList.querySelectorAll("input");

for (var i = 0; i < myListItems.length; i++) {
  myInputs[i].addEventListener("blur",removeClass);
  myListItems[i].addEventListener("click",addClass);
  //myListItems[i].addEventListener("enter",removeClass('edit'));

};

function removeClass(){
 
  this.previousElementSibling.innerHTML = this.value;
  this.attributes["value"].value = this.value;
  var x =this.parentNode.querySelector("span");
  this.parentNode.className = "";
}

function addClass(){
  var input = this.querySelector('input');
  this.className = 'edit';
  input.focus();
  input.setSelectionRange(0, input.value.length);

  console.log(input);
  console.log(this);
}