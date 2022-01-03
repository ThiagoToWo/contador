const REGEX = /[. ,():;\n\t]/;

function Contador(texto) {
	this.texto = (texto != '') ? texto : '';
	this.letras = {};
	this.palavras = {};	
}

Contador.prototype.novoTexto = function(texto) {
	this.texto = texto;
} 
Contador.prototype.contarLetras = function() {
	var split = this.texto.split(REGEX);
	var letra;
	for (var i = 0; i < split.length; i++) {
		for (var j = 0; j < split[i].length; j++) {
			letra = split[i][j].toLowerCase();
			if (this.letras[letra] == null) {
				this.letras[letra] = 1;
			} else {
				this.letras[letra]++;
			}
		}
	}
}

Contador.prototype.contarPalavras = function() {
	var split = this.texto.split(REGEX);
	for (var i = 0; i < split.length; i++) {
		if (this.palavras[split[i]] == null) {
			this.palavras[split[i]] = 1;
		} else {
			this.palavras[split[i]]++;
		}		
	}
}