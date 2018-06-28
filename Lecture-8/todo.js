/**
 * Created by aayusharora on 6/28/18.
 */
window.onload = function() {
    let button = document.getElementById('btn');
    let input = document.getElementById('inp');
    let output = document.getElementById('result');
    let value = "";
    var todoList = [];
    button.onclick = function () {
        value = `<li>${input.value}</li>`;
        todoList.push(value);
        display();
    };

    function display() {
        let list = "";
       for(let todo=0; todo<todoList.length; todo++) {
          list += todoList[todo];
       }

       output.innerHTML = list;
    }


    // Add a function Update
    // Add a function Delete
    // Replace InnerHTML with Optimised Approach
};