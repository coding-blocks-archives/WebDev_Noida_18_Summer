
(function(){
    var x = 2;
    console.log(x);
    function hello(){
        var y = 2;
        return function main() {
            x = y;
        }
    }

    hello()();//


})();

