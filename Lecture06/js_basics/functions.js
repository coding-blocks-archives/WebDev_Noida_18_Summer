
fun1(true)
fun2(true)

function fun1 (a) {
    if (a) {
        console.log("running fun1")
        fun2(true)
    }
}

function fun2 (a) {
    if (a)  {
        console.log("running fun2")
        fun1(false)
    }
}
