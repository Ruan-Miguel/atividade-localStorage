function colocardados () {
	if (typeof(Storage) !== "undefined") {
		if (localStorage.getItem('listadechaves') != null) {
			var chaves = localStorage.getItem('listadechaves').split(',')
			chaves.forEach(function (chave) {
				var dados = localStorage.getItem(chave)
				var conta = dados.split(',', 3)
				conta[conta.length] = dados.slice(1 + dados.indexOf(',',dados.lastIndexOf(conta[2])))
				document.getElementById('lista').innerHTML += criaEstrutura(conta)
			})
		}
		verificacao(document.getElementsByTagName('ul')[0],document.getElementsByTagName('button')[0])
	} else {
    window.alert("API Web Storage não encontrada");
  }
}

function criaEstrutura (campos) {
	var estrutura = '<li class="collection-item avatar" onclick="insereEscolha(this)"><img src="'
	estrutura += campos[3] + '" alt="" class="circle"><span class="title">'
	estrutura += campos[0] + '</span><p>'
	estrutura += campos[1] + '</p></li>'
	return estrutura
}

function insereEscolha (escolha) {
	var posicao = Array.from(document.getElementsByTagName('li')).findIndex(function (membro) {
		return membro == escolha
	})
	localStorage.setItem('escolha', posicao)
	window.location.href = 'detalhes.html'
}

function verificacao(ul, button) {
	if(ul.innerHTML == ""){
		ul.style.display = 'none'
		button.style.display = 'none'
	}
}

function apagarLista () {
	var chaves = localStorage.getItem('listadechaves').split(',')
	chaves.forEach(function (chave) {
		localStorage.removeItem(chave)
	})
	localStorage.removeItem('listadechaves')
	localStorage.removeItem('escolha')
	window.location.reload()
}