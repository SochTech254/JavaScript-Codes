// It is similar to for loop but it is used to iterate over an object instead of an array
var myObject = {foo : "Dan", bar : 2};

for(var x in myObject) {
    
    // displays the object keys
    console.log(x);    // foo, bar

    // displays the values of the keys

    console.log(myObject[x]);   // Dan, 2
}