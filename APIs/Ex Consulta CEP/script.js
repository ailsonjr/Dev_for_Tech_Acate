let cep = document.getElementById('inputCep');

function consultaCep() {
  fetch(`https://api.postmon.com.br/v1/cep/${cep.value}`).then(retorno_cep => {
    return retorno_cep.json();
  }).then(preenchimento_campo => {
    document.getElementById("cep").value = preenchimento_campo.cep;
    document.getElementById("endereco").value = preenchimento_campo.logradouro;
    document.getElementById("bairro").value = preenchimento_campo.bairro;
    document.getElementById("cidade").value = preenchimento_campo.cidade;
    document.getElementById("estado").value = preenchimento_campo.estado;
  });
}

function limpaCampos() {
  cep.value = '';
  document.getElementById("cep").value = '';
  document.getElementById("endereco").value = '';
  document.getElementById("bairro").value = '';
  document.getElementById("cidade").value = '';
  document.getElementById("estado").value = '';
}

