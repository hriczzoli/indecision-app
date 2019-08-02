function square(x) {
    return x * x;
};

console.log(square(8));


//Arrow functions
// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(9));


//Challange
//regular arrow function
let fullName;
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}
console.log(getFirstName('Zoltan Hricz'));

//arrow function using shorthand syntax
const getFirstNameTwo = (fullName) => fullName.split(' ')[0];
console.log(getFirstNameTwo('Mike Posner'));