
var Person = function(firstAndLast) {
    var fullName = firstAndLast;

    this.getFullName = function(){
        return fullName;
    };
    this.getFirstName = function(){
        return fullName.split(" ")[0];
    };
    this.getLastName = function(){
        return fullName.split(" ")[1];
    };
    this.setFirstName = function(newName){
        fullName = newName + " " + fullName.split(" ")[1];
        return fullName;
    };
    this.setLastName = function(newName){
        fullName = fullName.split(" ")[0] + " " + newName;
        return fullName;
    };
    this.setFullName = function(newName){
        fullName = newName;
        return fullName;
    }
};

var bob = new Person('Bob Ross');
bob.getFullName();
bob.setFirstName("Tim");
