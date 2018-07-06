

// Call the function at the top, display()

/*
* function display() {
*
*   Get Request at /display route
*   Loop that todoList and append on the page
* }
 *
* */


function makeRequest() {

    // Send the todo item

    $.ajax({
        url: '/add',
        method: 'GET',
        success: function(data) {
            console.log(data);
            // Append TodoList Item on Page
        }
    })

}

