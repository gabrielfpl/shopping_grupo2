function mascara_cpf (objeto){
	if(objeto.value.length == 3){
		objeto.value = objeto.value + '.';
	}
	if(objeto.value.length == 7){
		objeto.value = objeto.value + '.';
	}
	if(objeto.value.length == 11){
		objeto.value = objeto.value + '-';
	}
}