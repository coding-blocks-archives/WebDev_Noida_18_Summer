window.onload = function () {
    
    let addtask = document.getElementById('addtask')
    let newtask = document.getElementById('newtask')
    let list = document.getElementById('list')

    addtask.onclick = function () {
        list.innerHTML += "<li>" + newtask.value + "</li>"
    }

}