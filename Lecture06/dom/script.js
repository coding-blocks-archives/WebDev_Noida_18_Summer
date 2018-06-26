window.onload = function () {
    
    let addtask = document.getElementById('addtask')
    let newtask = document.getElementById('newtask')
    let list = document.getElementById('list')

    addtask.onclick = function () {
        let start = new Date().getTime()
        
        let N = +(newtask.value)
        for (let i = 1; i <= N; i++) {
            let print = ""
            if (i%3 == 0) print += "fizz"
            if (i%5 == 0) print += "buzz"

            if (print == "") print = i

            let item = document.createElement('li')
            item.innerText = print
            list.appendChild(item)

        }
        

        console.log(new Date().getTime() - start)
    }

}