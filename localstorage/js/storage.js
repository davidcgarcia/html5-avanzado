function Lista(clave){
	this.clave = clave;

	this.agregarActividad = function(actividad) {
		if (this.validarNavegador()) {

			if (localStorage.getItem(this.clave) !== null) {
				var actividades = JSON.parse(localStorage.getItem(this.clave));
			} else {
				var actividades = [];
			}
			actividades.push(actividad);
			localStorage.setItem(this.clave, JSON.stringify(actividades));
			return true;
		}

		return false;
	}

	this.obtenerActividades = function(actividad){
		if (localStorage.getItem(this.clave) != "undefined") {
			return JSON.parse(localStorage.getItem(this.clave));
		}

		return null;
	}

	this.eliminarActividad = function(actividad){
		var actividades = JSON.parse(localStorage.getItem(this.clave));
		actividades = actividades.filter(function(i){
			return i != actividad;
		});
		localStorage.setItem(this.clave, JSON.stingify(actividades));
	}

	this.eliminarActividades = function(){
		localStorage.removeItem(this.clave);
	}

	this.validarNavegador = function(){
		if (typeof(Storage) !== "undefined") return true;
		return false;
	}
}