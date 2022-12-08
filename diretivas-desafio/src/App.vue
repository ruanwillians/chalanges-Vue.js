<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<button v-quando:click="action1">Clique</button>
		<p v-quando:mouseenter="action2" v-quando:mouseout="action3">Passe o mouse aqui</p>
		<hr>
	</div>
</template>

<script>
export default {
	directives: {
		'quando': {
			bind(el, biding){
				const type = biding.arg
				const fn = biding.value
				el.addEventListener(type, fn)
		}
	}
},
	methods: {
		action1(){
			alert('clicou')
		},
		action2(){
			console.log('entrou')
		},
		action3() {
			console.log('saiu')
		}

	}
		
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
	border: none;
}
</style>
