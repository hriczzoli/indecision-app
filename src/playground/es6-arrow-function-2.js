//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55, 1));

//this keyword - no longer bound

const user = {
    name: 'Zoltan',
    cities: ['Aalborg', 'Miskolc', 'Dublin'],
    // With a workaround approach
    // printPlacesLived: function () {
    //     const that = this;

    //     this.cities.forEach(function (city) {
    //         console.log(that.name + ' has lived in ' + city);
    //     }) 
    // }

    //With an arrow function we can still use the 'this' keyword referreing to the parent's this property
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        


        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // }) 
    }
};
console.log(user.printPlacesLived());


//Challange
const multiplier = {
    numbers: [1, 3, 5, 12, 26],
    multiplyBy: 14,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());