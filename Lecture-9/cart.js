/**
 * Created by aayusharora on 7/2/18.
 */
$(document).ready(function(){

    let inp = $('#inp');
    let btn = $('#btn');
    let result = $('#result');
    let todoList = [];
    btn.click(function(){
        let value = `
                   <li>
                       <input type="hidden">
                       <span onclick="changeType(this)">${inp.val()}</span>
                        <button onclick="updateEle(this)">Update</button>
                       <button onclick="deleteEle(this)">Delete</button>
                   </li>`;
        todoList.push(value);
        result.append(value);
    })
});

function deleteEle(ele) {
   $(ele).parent().remove()

}

function updateEle(ele) {
  let parent = $(ele).prev();
  let grandparent = parent.prev();
  let valInput = grandparent.val();
  if(valInput) {
      parent.text(valInput);
  }

  grandparent.attr("type", 'hidden');

}

function changeType(ele) {
    $(ele).prev().attr("type", 'text');
}