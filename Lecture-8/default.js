/**
 * Created by aayusharora on 6/28/18.
 */

var a = 5;
function hello() {
    function main() {
        this.a = 9;
        console.log(this.a);
    }
    main()
}

hello();

console.log(window);
console.log(a);