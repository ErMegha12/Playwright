let fruits =["apple", "banana", "orange"];
fruits.push("grape");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]
fruits.unshift("kiwi");
console.log(fruits); // Output: ["kiwi", "apple", "banana", "orange", "grape"]      
fruits.pop();
console.log(fruits); // Output: ["kiwi", "apple", "banana", "orange"]
fruits.shift();
console.log(fruits); // Output: ["apple", "banana", "orange"]   
fruits.pop();
console.log(fruits[1]); // Output: "banana"
fruits.push("grape");
console.log(fruits[0]); // Output: "apple"
