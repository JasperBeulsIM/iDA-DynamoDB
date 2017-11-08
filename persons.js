API = require("api-server.js");

class Person {
    constructor(Id, FirstName, LastName, Email) {
        this.id = Id
    }

}

function dynamoItemsToPersons(items){
    return items.map((item)=>{
        return new Person(item.id.N, item.FirstName.S, item.LastName.S, item.Email.N);
    })
}