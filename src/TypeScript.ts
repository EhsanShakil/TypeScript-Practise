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
