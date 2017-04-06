var socket = io();
socket.on('connect', function (){
  console.log('Connected to server.')
});

// socket.on('newMessage', function(message){
//   var formattedTime = moment(message.createdAt).format('h:mm a');
//   console.log('New Message', message);
//   // var el = document.getElementById('messageArray')
//   // el.insertAdjacentHTML('beforeend',`<li>${message.from}:${formattedTime} ${message.text}</li>`);
// });
// socket.on('newLocationMessage', function(message){
//     var formattedTime = moment(message.createdAt).format('h:mm a');
//   console.log('New Message', message);
//   // var el = document.getElementById('messageArray')
//   // el.insertAdjacentHTML('beforeend',`<li>${message.from}:${formattedTime}  <a target="_blank" href=${message.url}>My Location </a></li>`);
// });
