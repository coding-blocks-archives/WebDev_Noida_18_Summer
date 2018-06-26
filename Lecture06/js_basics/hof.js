// Higher order functions

function createGreeter (greeting, findname) {
    
    function greeter () {
        console.log(greeting + " " + findname())
    }
    return greeter
}

function nameGen () {
    return "Harry"
}

let goodMorning = createGreeter("Good Morning", nameGen)
let goodEvening = createGreeter("Good Evening", nameGen)
goodMorning()
goodEvening()