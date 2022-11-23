const obj = {
	name: "Ivan",
	family: "Ivanov",
	address: {
		zip: 92040,
		line : { first: "32 Walter Street" }
	},
	field: new Date(),
  	contacts: [{ type: "phone", value: "+1532502997" }],
}

const clone2 = Object.assign({}, obj);
const clone3 = {...obj};

console.log(clone2)
console.log(clone3)