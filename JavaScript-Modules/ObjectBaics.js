const foor = {}    // foo is an object
//    Objects are variables
//    They represent various attributes of a certain entity
//    Person object below represents a Person whose name is "foo" and age is 21
//              name is the property key
//              foo is the property value

const Person = {
    name : "foo",
    age : 21 
} 

// You can access object property value in two ways :
console.log(Person.name);    // foo
console.log(Person['age']);    // 21