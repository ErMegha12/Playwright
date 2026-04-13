let x= "hello";
console.log(typeof x); // Output: string
let y = 42;
console.log(typeof y); // Output: number
let z = true;
console.log(typeof z); // Output: boolean
let a = null;
console.log(typeof a); // Output: object (this is a known quirk in JavaScript)
let b = undefined;
console.log(typeof b); // Output: undefined
let c = { name: "Alice", age: 30 };
console.log(typeof c); // Output: object                
let d = [1, 2, 3];
console.log(typeof d); // Output: object (arrays are also considered objects in JavaScript)
let e = function() { return "Hello"; };
console.log(typeof e); // Output: function  
let f = Symbol("unique");
console.log(typeof f); // Output: symbol
let g = 10n;
console.log(typeof g); // Output: bigint
let h = 44.2;
console.log(typeof h); // Output: number
let i = 0;
console.log(typeof i); // Output: number