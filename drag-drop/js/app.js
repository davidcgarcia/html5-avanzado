var container;
var dragged;
window.addEventListener('load', init);

function init(){
	container = document.querySelector('.container');
	container.addEventListener('dragover', dragSobreContainer, false);
	container.addEventListener('dragleave', dragSalioContainer, false);
	container.addEventListener('drop', manejarDrop, false);
	var circles = document.getElementsByClassName('circle');

	for (i in circles) {
		var circle = circles[i];
		var x = random(0, 90);
		var y = random(0, 90);

		if (typeof circle.style != "undefined") {
			circle.style.top = y+'%';
			circle.style.left = x+'%';

			circle.addEventListener('dragstart', dragIniciado, false);
			circle.addEventListener('dragend', dragFinalizado, false);
		}
	}
}

function dragIniciado(e){
	this.style.backgroundColor = 'blue';
	dragged = this;
	var padre = document.createElement('p');
	var clon = this.cloneNode(true);
	padre.appendChild(clon);

	e.dataTransfer.setData('text', padre.innerHTML);
}

function manejarDrop(e){
	e.preventDefault();
	var datos = e.dataTransfer.getData('text');
	this.innerHTML += datos;
	dragged.parentNode.removeChild(dragged);
	this.classList.remove('over');
}

function dragSobreContainer(e) {
	e.preventDefault();
	this.classList.add('over');

	return false;
}

function dragSalioContainer(e) {
	this.classList.remove('over');
}


function dragFinalizado(e){
	this.style.backgroundColor = 'red';
}

function random(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}