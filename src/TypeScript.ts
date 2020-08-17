let a: number = 50;
a = 40;
console.log(a);

let b: boolean = true;
b = false;
console.log(b);

let arrayNumber: number[] = [1, 2, 3, 4, 5];
arrayNumber[0] = 0;
console.log(arrayNumber);

let arrayBoolean: boolean[] = [true, false];
console.log(arrayBoolean);

let square = (n: number) => {
  return n * n;
};
console.log(square(4));

let obj: { name: string; age: number } = {
  name: "John",
  age: 15,
};

type Age = number;
const age: Age = 26;
console.log(age);

type Person = {
  firstName: string;
  age: number;
  email?: string; //optional property
};

const person: Person = {
  firstName: "John",
  age: 30,
};
console.log(person);

const array: [number, string] = [30, "person"];
console.log(array);

enum Courses {
  Urdu,
  English,
  Math,
}
console.log(Courses);
console.log(Courses.Urdu);
console.log(Courses.English);
console.log(Courses.Math);
