/**
 * Created by aayusharora on 7/12/18.
 */
$(document).ready(function(){
   var socket = io();
   let btn = $('#btn');
   let inp = $('#inp');
   let result = $('#result');


   display();

   btn.click(function(){
      let value = inp.val();
      socket.emit('message', value);
   });

    socket.on('show', function(data) {
        result.append(`<li>${data}</li>`);

    })

    function render(data) {
        data.forEach((msg)=>{
            result.append(`<li>${msg}</li>`)
        })

    }

    function display() {
        socket.on('ms', function(data){
           render(data);

        })
    }
});

// Disconnect
// Host it on Heroku