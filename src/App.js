import logo from './logo.svg';
import './App.css';
import { useState } from "react";







let data = [
  { 
    id:"1",
    product: "Pen",
    amount: "$20",
    url: "https://offimart.com/7355-large_default/flair-woody-ball-pen-07mmblackpack-of-10.jpg",
  },
  { 
    id:"2",
    product: "Pencil",
    amount: "$5",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__bcmX5cyy7dbPQgqRF9FjJeRyW0uyyt7H_vbQ0cty6ah6pC2bmGghCVUVnPGGdYBFSk&usqp=CAU"  },
  { 
    id:"3",
    product: "Eraser",
    amount: "$6",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyIWkA098yOBA1uloYF0DtNK8TSpWmodT-EyKmaWIc29SKHsMsK4IAdUtyTtdAaDWS2g&usqp=CAU" },
  { 
    id:"4",
    product: "Sharpener",
    amount: "$3",
    url: "https://helloaugust.in/wp-content/uploads/2020/04/sharpner.jpg"
  },
  { 
    id:"5",
    product: "Scale",
    amount: "$25",
    url: "https://m.media-amazon.com/images/I/71hqiAbTgeL._SX355_.jpg"
  },
]
 
function App() {
  
  return (
    <div className="App">
      <h1 className="title">Welcome to Noorul's Shop</h1>
      <h2 className='count'>Your Cart Count is {"c"} </h2>
      <div className='container'>
     {   data.map((each,id)=>(
              
             <Card key={id} keys={each.id} name={each.product} amount={each.amount}  link = {each.url}/>
     ))
}         
               
      </div>
    </div>
  );
}

function Card(props) {
  let [show, setShow] = useState(true);
  let [count, setCount] = useState(0);
 
  var button = (number) => {

    setShow(!show);
    setCount(count + +number) ;
//  console.log(answer)
console.log(count)
    
  }

  
  return(
    <div className="Card">
      <img src= {props.link}/>
      <div className='name size'>{props.name}</div>
      <div>{props.keys}</div>
      <div className='amount size'>{props.amount}</div>
     {show ? (<button className='btn size' onClick={()=> button(1)} >Add to cart</button>) :  (<button className='btn size' onClick={()=>button(-1)}>Remove form cart</button>)}
      <div>{count}</div>
    </div>
  )
}

export default App;
