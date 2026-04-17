if (true) {
  let y = 20;
  const z = 30;
}

console.log(y); // ❌ Error
console.log(z); // ❌ Error

// In TypeScript, var is hoisted and accessible outside an if block, 
// while let and const are block-scoped and cannot be accessed outside it.