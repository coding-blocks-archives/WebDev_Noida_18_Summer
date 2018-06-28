/**
 * Created by aayusharora on 6/28/18.
 */
var obj = {
    name: "Aayush",
    getName: function() {
        console.log(this.name);

    }
};

var obj1 = {
    name: "Kiran",
    getName: function() {
        console.log(this.name);

    }
}

obj.getName();
obj1.getName();