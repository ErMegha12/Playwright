function runTest(name, status, duration) {
    return `${name}: ${status} (${duration}ms)`;
}

// Arguments
runTest("Login", "pass", 320);
// "Login: pass (320ms)"
console.log(runTest("Login", "pass", 320));
console.log(runTest("Signup", "fail", 150));
// "Signup: fail (150ms)"           
