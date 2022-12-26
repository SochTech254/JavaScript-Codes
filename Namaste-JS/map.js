// map
const arr = [5, 1, 3, 2, 6];

const output = arr.map(function double(x) {
    return x * 2;
});
console.log(output);

const output1 = arr.map((x) => x * 3);
console.log(output1);

const output2 = arr.map((x) => x.toString(2));
console.log(output2);


const users = [
    {firstName: "ashkay", lastName: "saini", age: 26},
    {firstName: "donald", lastName: "trump", age: 75},
    {firstName: "elon", lastName: "musk", age: 50},
    {firstName: "deepika", lastName: "padukone", age: 26}
];

const output3 = users.map((x) => x.firstName + " " + x.lastName);
console.log(output3)
