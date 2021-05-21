//let age:number=20;
//let employee: {id:number;name:string}={id:1,name:'john'};
var emp = {
    id: 1,
    firstName: 'john',
    lastName: 'smith',
    setFirstName: function (fname) {
        this.firstName = fname;
    },
    setLastName: function (lname) {
        this.lastName = lname;
    },
    getFirstName: function () {
        return this.firstName;
    }, getLastName: function () {
        return this.lastName;
    }
};
