/**
 * Created by aayusharora on 6/28/18.
 */


function hello(a,b,c) {
   console.log(this.getName());
   console.log(a,b,c)

}


var obj = {
    name: "Aayush",
    getName: function() {
        return this.name;

    }
}

hello();
hello.apply(obj, [1,2,2]);

function getName() {
    return "Main";

}