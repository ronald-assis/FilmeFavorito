const inputFilme = document.getElementById("filme")
const botaoAdicionar = document.getElementById('adicionarfilme')
const imagemFilme = document.getElementById('imagem-filme')

const filmeApiUrl = "http://www.omdbapi.com/?apikey=7b571171&t="

async function adicionarFilme() {
	const nomeDoFilme = encodeURI(inputFilme.value)
	const urlDoFilme = filmeApiUrl + nomeDoFilme
	const resposta = await fetch(urlDoFilme)
	const dados = await resposta.json()
	const imagem = dados["Poster"]
	imagemFilme.src = imagem
}

function adicionarTrailer() {
	var campoTrailer = document.querySelector('#input-trailer')
	var trailerFilme = campoTrailer.value
	if (validaVideo(trailerFilme)) {
		listarVideosNaTela(validaVideo(trailerFilme))
	} else {
		alert("Este não é um endereço válido do YouTube")
	}
	campoTrailer.value = ""
}

function validaVideo(url) {
	var v = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
	return (url.match(v)) ? url.match(v)[1] : false
}

function listarVideosNaTela(codVideo) {
	var listaTrailers = document.querySelector('#listaTrailers')
	var elementoFilme = "<iframe width='560' height='315' src='https://www.youtube.com/embed/" + codVideo + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
	listaTrailers.innerHTML += elementoFilme
}