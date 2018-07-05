/**
 * Created by aayusharora on 7/5/18.
 */
global.x = 3;

this.y = 2;

var z = 5;
// console.log(x);
// console.log(y);
function great() {
    return "Great Hero"

}



function add() {

    var x = process.argv.slice(2);
    return parseInt(x[0]) + parseInt(x[1] );
}

console.log(add());

//
