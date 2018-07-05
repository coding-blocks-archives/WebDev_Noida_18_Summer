/**
 * Created by aayusharora on 7/5/18.
 */
const URL = 'https://jsonplaceholder.typicode.com/posts/';

$(document).ready(function(){
   makeRequest();

});

function makeRequest() {
    $.ajax({
        url: URL,
        method: 'GET',
        success: function(data) {
           console.log(data);
           data.forEach(function(d){
               $('#dat').append(`${d.title}<br>`);

           })

        }
    })

}

