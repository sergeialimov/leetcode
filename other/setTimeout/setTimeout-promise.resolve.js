setTimeout(() => console.log(1), 0)
Promise.resolve().then(() => console.log(2))
console.log(3)
