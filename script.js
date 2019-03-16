var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");




function changeClass(){
	this.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

function deleteListItem(){
	this.parentElement.remove();
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	//Add a delete button near each li
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(button);
	button.innerHTML = "Delete";
	button.className = "delbutton"
	ul.appendChild(li);
	//change the class when li is clicked
	li.addEventListener("click", changeClass);
	
	button = document.getElementsByClassName("delbutton");
	//delete the lititem when button is clicked;
	for( i=0; i<button.length; i++){
		button[i].addEventListener('click', deleteListItem)
	}
	// revert input value back to nothing
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

