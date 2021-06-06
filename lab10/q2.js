/*Implement the Decorator pattern to add a logger to any object (add behavior). 
A logger method will log a message to the console.*/
class User {
    constructor(name) {
        this.name = name;
    }
}

class DecoratedUser {

    constructor(user, street, city) {
        this.user = user;
        this.name = user.name; // ensures interface stays the same
        this.street = street;
        this.city = city;
    }

    logger() {
        console.log("Decorated User: " + this.name + ", " +
            this.street + ", " + this.city);
    };
}

var user = new User("Kelly");

var decorated = new DecoratedUser(user, "fairfoeld", "Iowa");
decorated.logger();