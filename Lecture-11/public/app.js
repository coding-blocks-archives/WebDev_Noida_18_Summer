
function makeRequest() {
    $.ajax({
        url: '/add',
        method: 'GET',
        success: function(data) {
            console.log(data);

        }
    })

}

