import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;

let data = [
  {
    id: "1",
    product: "Pen",
    amount: "$20",
    url: "https://offimart.com/7355-large_default/flair-woody-ball-pen-07mmblackpack-of-10.jpg",
  },
  {
    id: "2",
    product: "Pencil",
    amount: "$5",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__bcmX5cyy7dbPQgqRF9FjJeRyW0uyyt7H_vbQ0cty6ah6pC2bmGghCVUVnPGGdYBFSk&usqp=CAU",
  },
  {
    id: "3",
    product: "Eraser",
    amount: "$6",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyIWkA098yOBA1uloYF0DtNK8TSpWmodT-EyKmaWIc29SKHsMsK4IAdUtyTtdAaDWS2g&usqp=CAU",
  },
  {
    id: "4",
    product: "Sharpener",
    amount: "$3",
    url: "https://helloaugust.in/wp-content/uploads/2020/04/sharpner.jpg",
  },
  {
    id: "5",
    product: "Scale",
    amount: "$25",
    url: "https://m.media-amazon.com/images/I/71hqiAbTgeL._SX355_.jpg",
  },
];

function Card() {
  let [count, setCount] = useState(0);

  const handleAdd = (product, amount) => {
    setCount(count + 1);
    var tempProduct = product;
    var tempAmount = amount;
    console.log(tempProduct, tempAmount);
    document.getElementById(tempProduct).disabled = true;
    document.getElementById(tempAmount).disabled = false;
  };
  const handleRemove = (product, amount) => {
    if (document.getElementById(product).disabled === true) {
      setCount(count - 1);
      var tempProduct = product;
      var tempAmount = amount;
      console.log(tempProduct, tempAmount);
      document.getElementById(tempProduct).disabled = false;
      document.getElementById(tempAmount).disabled = true;
    }
  };
  return (
    <div className="container">
      <h1 className="title">Welcome to Noorul's Shop</h1>
      <h2 className="count">Your Cart Count is {count} </h2>

      <div className="item">
        {data.map((each, idx) => (
          <div className="Card" key={idx}>
            <img src={each.url} alt={each.product} />
            <div className="name size">{each.product}</div>
            <div className="amount size">{each.amount}</div>
            <button
              id={each.product}
              className="btn size add"
              onClick={() => handleAdd(each.product, each.amount)}
            >
              Add to cart
            </button>
            <button
              id={each.amount}
              className="btn size"
              onClick={() => handleRemove(each.product, each.amount)}
            >
              Remove form cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
