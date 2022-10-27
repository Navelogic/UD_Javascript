let msg = document.getElementById('msg');
let img = document.getElementById('img');

let data = new Date();
let hora = data.getHours();
let minutos = data.getMinutes();

msg.innerHTML = `São ${hora}:${minutos}`;

if(hora <  12){
  img.src = './img/pexels-james-wheeler-1486974.jpg';
  document.body.style.background = '#8a74a2'
} else if (hora < 18){
  img.src = './img/pexels-christo-james-v-724507.jpg';
  document.body.style.background = '#8a74a2'
} else {
  img.src = './img/pexels-magno-dias-ciqueira-9544391.jpg';
  document.body.style.background = 'black'
}
