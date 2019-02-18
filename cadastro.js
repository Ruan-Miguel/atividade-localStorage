/*FACEBOOK FOR DEVELOPERS*/

function enviarFormulario () {
	var dados = Array.from(document.getElementsByClassName('validate'))
	var dadotratado = dados.map(function (dado) {
		return dado.value
	})
	if (typeof(Storage) !== "undefined") {
		var aux
		if(localStorage.getItem('listadechaves') == null){
			localStorage.setItem('listadechaves', dadotratado[0])
			localStorage.setItem(dadotratado[0], dadotratado)
		}else{
			aux = localStorage.getItem('listadechaves')
			aux += ',' + dadotratado[0]
			localStorage.setItem('listadechaves', aux)
			localStorage.setItem(dadotratado[0], dadotratado)
		}
	} else {
	    window.alert("API Web Storage não encontrada");
	}
}