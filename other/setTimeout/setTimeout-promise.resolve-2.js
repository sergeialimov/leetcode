setTimeout(() => console.log(1), 0)
Promise.resolve().then(() => setTimeout(console.log(2)), 10)
console.log(3)
