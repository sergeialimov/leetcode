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

const deepClone = (obj) => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  const keys = Object.keys(clone);
  keys.forEach((key) =>
  (clone[key] =
    typeof obj[key] === 'object'? deepClone(obj[key]) : obj[key]));
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
}

const clone = deepClone(obj);

console.log(clone);

