// variables
console.log("hello world")
var x = 10;
var y = 20;
var a = x * y;
console.log(a);

// let
let z  = 2;
console.log(x);

// const
const car = {type:"porshce",model:"911",color:"white"};
car.color = "red";
console.log(car);

// arrays
var cars = ["Ford","bmw","sam"];
console.log(cars);
var text = "";
for(var i=0;i<cars.length;i++)
  text += cars[i] + "\n";
console.log(text);
// arrays methods
cars.pop();
cars.push("sampath");
console.log(cars);
cars.sort();
cars.reverse();

// dates
var object = new Date();
console.log(object);

// arrow function
var hello;
hello = () => {
  return "Hello world";
}
console.log(hello);

// Class
class Car{
  constructor(name, year){
    this.name = name;
    this.year = year;
  }
}
obj = new Car("sampath",2021);
console.log( obj.name + " " + obj.year );
