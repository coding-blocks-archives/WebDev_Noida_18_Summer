
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
                result.append(`<li>
                              <span>${data}</span>
                              <button onclick="deleteKey(this)">Delete</button>
                              </li>`
                )
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
                    result.append(`<li>
                              <span>${i}</span>
                              <button onclick="deleteKey(this)">Delete</button>
                              </li>`)
                })
            }
        })

    }


});


function deleteKey(element) {
    let index = $(element).parent().index();


    $.ajax({
        url: '/delete',
        method: 'GET',
        data: {id: index},
        success: function(data) {
            $(element).parent().remove();
        }
    })

}

// Call the function at the top, display()

/*
* function display() {
*
*   Get Request at /display route
*   Loop that todoList and append on the page
* }
 *
* */


