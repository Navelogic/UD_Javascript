const url = "https://viacep.com.br/ws/";

function PesquisaCEP(valor){
  let cep = valor.replace(/\D/g, '');
  if (cep != ""){
    let validaCEP = /^[0-9]{8}$/;
    if (validaCEP.test(cep)){
      document.getElementById('rua').value=("...");
      document.getElementById('bairro').value=("...");
      document.getElementById('cidade').value=("...");
      document.getElementById('uf').value=("...");
      document.getElementById('ibge').value=("...");

      let script = document.createElement('script');
      script.src = `${url}${cep}//json/?callback=retorno`;
      document.body.appendChild(script);      
  } else {
    LimpaForm();
    alert("CEP INVÁLIDO");
  }

} else {
  LimpaForm();
}};

function retorno(conteudo){
  if(!("erro" in conteudo)){
      document.getElementById('rua').value=(conteudo.logradouro);
      document.getElementById('bairro').value=(conteudo.bairro);
      document.getElementById('cidade').value=(conteudo.localidade);
      document.getElementById('uf').value=(conteudo.uf);
      document.getElementById('ibge').value=(conteudo.ibge);
  } else {
    LimpaForm();
    alert("CEP NÃO ENCONTRADO");
  }
}

function LimpaForm(){
  document.getElementById('rua').value=("");
  document.getElementById('bairro').value=("");
  document.getElementById('cidade').value=("");
  document.getElementById('uf').value=("");
  document.getElementById('ibge').value=("");
}