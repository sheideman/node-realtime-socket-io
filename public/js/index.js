var socket = io();
socket.on('connect', function (){
  console.log('Connected to server.')
});

socket.on('newMessage', function(message){
  console.log('New Message', message);
  var el = document.getElementById('messageArray')
  el.insertAdjacentHTML('beforeend',`<li>${message.text}</li>`);
});
socket.on('newLocationMessage', function(message){
  console.log('New Message', message);
  var el = document.getElementById('messageArray')
  el.insertAdjacentHTML('beforeend',`<li>${message.from}: <a target="_blank" href=${message.url}>My Location </a></li>`);
});
