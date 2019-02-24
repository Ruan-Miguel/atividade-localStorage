function insereDetalhes () {
	var posicao = parseInt(localStorage.getItem('escolha'))
	var usuario = localStorage.getItem('listadechaves').split(',')[posicao]
	var detalhesprimitivo = localStorage.getItem(usuario)
	var detalhes = detalhesprimitivo.split(',', 3)
	detalhes[detalhes.length] = detalhesprimitivo.slice(1 + detalhesprimitivo.indexOf(',', detalhesprimitivo.lastIndexOf(detalhes[2])))
	document.getElementsByTagName('th')[0].innerHTML = detalhes[0]
	document.getElementsByTagName('img')[0].src = detalhes[3]
	document.getElementById('email').innerHTML += detalhes[1]
	document.getElementById('git').innerHTML += detalhes[2]
}