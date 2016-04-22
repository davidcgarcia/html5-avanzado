window.addEventListener('load', init, false);
window.addEventListener('storage', actividadAgregada, false);

var storage;
var clave = 'tutorial_storage';
function init(){
	var formulario = document.querySelector('#todo_form');
	storage = new Lista(clave);
	formulario.addEventListener('submit', agregarActividad, false);
	actualizarLista(storage.obtenerActividades());
}

function agregarActividad(e){
	e.preventDefault();
	var actividad = document.querySelector('#todo').value;
	if (storage.agregarActividad(actividad)) {
		console.log('Se agregó la actividad');
		actualizarLista(storage.obtenerActividades());
	}
}

function actualizarLista(actividades){
	var lista = document.querySelector('#todo_list');
	lista.innerHTML = "";

	if (actividades != null) {
		for (i in actividades) {
			var actividad = actividades[i];
			var elemento = document.createElement('li');
			elemento.innerHTML = actividad;
			lista.appendChild(elemento);
		}
	}
}

function actividadAgregada(e){
	console.log(e.key);
	actualizarLista(storage.obtenerActividades());
}