var nameVar = 'Zoltan';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('namLet', nameLet);

const nameConst = 'Frank';
console.log('const', nameConst);

//Block scoping
const fullName = 'Zoltan Hricz';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

