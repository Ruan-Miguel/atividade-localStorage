function colocardados () {
	if (typeof(Storage) !== "undefined") {
		var chaves = localStorage.getItem('listadechaves').split(',')
		chaves.forEach(function (chave) {
			var dados = localStorage.getItem(chave)
			var conta = dados.split(',', 3)
			conta[conta.length] = dados.slice(dados.indexOf('http',))
			document.getElementById('lista').innerHTML += criaEstrutura(conta)
		})
  } else {
    window.alert("API Web Storage não encontrada");
  }
}

function criaEstrutura (campos){
	var estrutura = '<li><table class="centered white"><thead><tr><th>'
	estrutura += campos[0] + '</th></tr></thead><tbody><tr><td><img style="max-height: 300px;" src="'
	estrutura += campos[3] + '"></td></tr><tr><td>email: '
	estrutura += campos[1] + '</td></tr><tr><td>git: '
	estrutura += campos[2] + '</td></tr></tbody></table>'
	estrutura += '<div class="row"></div></li>'
	console.log(estrutura)
	return estrutura
}