var socket = io();
socket.on('connect', function (){
  console.log('Connected to server.')

  // socket.emit('createMessage', {
  //   from: 'jen@example.com',
  //   text: 'Hey, It is me!'
  // });
});

socket.on('newMessage', function(message){
  console.log('New Message', message);
});
