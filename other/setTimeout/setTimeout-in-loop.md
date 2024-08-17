# setTimeout in loop

```js
console.log(i)
for(var i=0; i<5; i++) {
  setTimeout(function() {
    console.log(i)
  }, 0)
}
console.log(i)
```

The code snippet you've provided uses a `for` loop with `setTimeout` inside it and logs the value of `i` at different stages of the loop's execution. Here's a step-by-step explanation of how it executes:

1. `console.log(i)` is called before the loop starts. Since `i` is declared with `var`, which is function-scoped (or globally-scoped if outside a function) and not block-scoped, JavaScript hoists the declaration of `i` to the top of its scope. This means `i` is defined but not initialized at the point where it's logged. As a result, this will log `undefined`.

2. The `for` loop is then set up with the initial condition `var i = 0;`. The condition `i < 5;` means the loop will execute as long as `i` is less than 5. The variable `i` is incremented by 1 after each iteration of the loop due to `i++`.

3. Inside the loop, `setTimeout(function() { console.log(i) }, 0)` is executed. `setTimeout` is an asynchronous function, which schedules the passed function to run after at least 0 milliseconds. However, due to event loop behavior in JavaScript, even though the delay is 0 milliseconds, the callback function is placed in the queue and will only execute once the current call stack is clear (which means after the entire loop has executed and the current execution context is cleared).

4. After the loop finishes executing, `console.log(i)` is called. Since the loop increments `i` until `i` is no longer less than 5, `i` will be `5` at this point. Thus, this will log `5`.

5. Once the loop is done and the last `console.log(i)` outside the loop has executed, the JavaScript event loop starts to process the queued callback functions from `setTimeout`. Since all the `setTimeout` functions were queued during the iterations of the loop and by that time `i` was incremented to `5` (and since `var` is function-scoped, there's only one `i` in this context), each callback will reference the same `i` value which is `5` after the loop concludes. Therefore, `5` will be logged 5 times, once for each iteration of the loop that scheduled a `setTimeout`.

In summary, the output will be:
- `undefined` (due to hoisting and the `console.log(i)` before the initialization)
- `5` (from the `console.log(i)` after the loop)
- `5` (logged five times, once for each `setTimeout` callback, because the callbacks are executed after the loop completes and `i` equals `5` at that point)
