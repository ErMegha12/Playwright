// void
function sayHello(msg: string): void {
    console.log(msg);
}

// Function annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// never - function never returns (throws or infinite loop)
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) { }
}
console.log(greet("Alice"));
/**try {
    throwError("Something went wrong!");
} catch (error) {
    console.error(error);
}   */
// infiniteLoop(); // Uncommenting this will cause an infinite loop
