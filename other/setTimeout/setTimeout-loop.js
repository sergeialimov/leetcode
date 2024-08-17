console.log(i) // undefined
for(var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i)
  }, 0)
  i++;
}
setTimeout(function() {
  console.log(i);
}, 1)
