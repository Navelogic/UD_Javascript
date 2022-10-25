const d = new Date();
let dia = d.getDate();
let mes = d.getMonth();
let ano = d.getFullYear();
let mesTratado;

switch (mes) {
  case 0:
    mesTratado = "Janeiro";
    break;
  case 1:
    mesTratado = "Fevereiro";
    break;
  case 2:
    mesTratado = "Março";
    break;
  case 3:
    mesTratado = "Abril";
    break;
  case 4:
    mesTratado = "Maio";
    break;
  case 5:
    mesTratado = "Junho";
    break;
  case 6:
    mesTratado = "Julho";
    break;
  case 7:
    mesTratado = "Agosto";
    break;
  case 8:
    mesTratado = "Setembro";
    break;
  case 9:
    mesTratado = "Outubro";
    break;
  case 10:
    mesTratado = "Novembro";
    break;
  case 11:
    mesTratado = "Dezembro";
    break;
};

function PassandoData(){
  document.getElementById('teste').innerHTML = `O dia é ${dia}, o mês é ${mesTratado}, o ano é ${ano}.`;
}