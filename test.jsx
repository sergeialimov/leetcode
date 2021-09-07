const updateArr = (arr, el) => {
  const index = arr.findIndex(el);
  const tmp = arr[0];
  arr[index] = tmp; 
  arr[0] = el;
  return arr;
}

const handleClick = (e) => {
  e.preventDefault();
  const res = updateArr(e.target.value);
  return res;
};

const List = (props) => {
  const { items } = props;
  const newArr = items;
  
  
  return  newArr;
}

document.body.innerHTML = "<div id='root'> </div>";
  
const rootElement = document.getElementById("root");
ReactDOM.render(
  <List
    items={["A", "B", "C"]}
    onClick={((e) => this.handleClick(e))}
  />,
  rootElement
  );

let listItem = document.querySelectorAll("li")[1];
if (listItem) {
  listItem.click();
}
setTimeout(() => console.log(document.getElementById("root").innerHTML));