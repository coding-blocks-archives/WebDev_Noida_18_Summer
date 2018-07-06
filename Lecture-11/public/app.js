
$(document).ready(function(){
    let inp = $('#inp');
    let result = $('#result');
    let btn = $('#btn');
    display();
    btn.click(function(){
        makeRequest();

    });

    function makeRequest() {

        // Send the todo item

        $.ajax({
            url: '/add',
            method: 'GET',
            data: {todo: inp.val()},
            success: function(data) {
                result.append(`<li>${data}</li>`)
                // Append TodoList Item on Page
            }
        })

    }

    function display(){
        $.ajax({
            url: '/display',
            method: 'GET',
            success: function(data) {
                data.forEach(function(i){
                    result.append(`<li>${i}</li>`)
                })
            }
        })

    }
});


// Call the function at the top, display()

/*
* function display() {
*
*   Get Request at /display route
*   Loop that todoList and append on the page
* }
 *
* */


