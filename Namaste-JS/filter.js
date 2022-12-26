// filter
const arr = [5, 1, 3, 2, 6];

const output = arr.filter((x) => x % 2);

console.log(output);

const users = [
    {firstName: "ashkay", lastName: "saini", age: 26},
    {firstName: "donald", lastName: "trump", age: 75},
    {firstName: "elon", lastName: "musk", age: 50},
    {firstName: "deepika", lastName: "padukone", age: 26}
];

// method chaining
const output1 = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output1);