"use strict";
var a = 50;
a = 40;
console.log(a);
var b = true;
b = false;
console.log(b);
var arrayNumber = [1, 2, 3, 4, 5];
arrayNumber[0] = 0;
console.log(arrayNumber);
var arrayBoolean = [true, false];
console.log(arrayBoolean);
var square = function (n) {
    return n * n;
};
console.log(square(4));
var obj = {
    name: "John",
    age: 15,
};
var age = 26;
console.log(age);
var person = {
    firstName: "John",
    age: 30,
};
console.log(person);
var array = [30, "person"];
console.log(array);
var Courses;
(function (Courses) {
    Courses[Courses["Urdu"] = 0] = "Urdu";
    Courses[Courses["English"] = 1] = "English";
    Courses[Courses["Math"] = 2] = "Math";
})(Courses || (Courses = {}));
console.log(Courses);
console.log(Courses.Urdu);
console.log(Courses.English);
console.log(Courses.Math);
var add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(5, 5));
