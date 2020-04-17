let estados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás',
'Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí',
'Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo',
'Sergipe','Tocantins']
for (i = 0; i < estados.length; i +=1){
	let optionElement = document.createElement('option');
	const formElement = document.getElementById('listEstado');
	optionElement.innerText = estados[i];
	formElement.appendChild(optionElement);
}
window.addEventListener('DOMContentLoaded', function(){
	var myDatepicker = document.querySelector('input[name="fdate"]');
  	myDatepicker.DatePickerX.init({
		format : 'dd/mm/yyyy'
	});
  
  });
  validation.init("form");

 