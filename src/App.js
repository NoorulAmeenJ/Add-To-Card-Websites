import logo from './logo.svg';
import './App.css';
import { useState } from "react";

let data = [
  {
    product: "Pen",
    amount: "$20",
    url: "https://offimart.com/7355-large_default/flair-woody-ball-pen-07mmblackpack-of-10.jpg",
  },
  {
    product: "Pencil",
    amount: "$5",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__bcmX5cyy7dbPQgqRF9FjJeRyW0uyyt7H_vbQ0cty6ah6pC2bmGghCVUVnPGGdYBFSk&usqp=CAU"  },
  {
    product: "Eraser",
    amount: "$6",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyIWkA098yOBA1uloYF0DtNK8TSpWmodT-EyKmaWIc29SKHsMsK4IAdUtyTtdAaDWS2g&usqp=CAU" },
  {
    product: "Sharpener",
    amount: "$3",
    url: "https://helloaugust.in/wp-content/uploads/2020/04/sharpner.jpg"
  },
  {
    product: "Scale",
    amount: "$25",
    url: "https://m.media-amazon.com/images/I/71hqiAbTgeL._SX355_.jpg"
  },
]
 
function App() {
  
  return (
    <div className="App">
      <div className="title">Heading</div>
      <div>Cart Count {"c"} </div>
      <div className='container'>
     {   data.map((each,id)=>(
             <Card key={id} name={each.product} amount={each.amount}  link = {each.url}/>
     ))
}         
               
      </div>
    </div>
  );
}

function Card(props) {

  let [show, setShow] = useState(true);
  let [count, setCount] = useState(0);
  function button() {
    
    setShow(!show);
 //   console.log(show)
  if(show == true){
    count++
 
  }
  else{
    count-- 
   
  }
             setCount(count)

  }
  return(
    <div className="Card">
      <img src= {props.link}/>
      <div className='name'>{props.name}</div>
      <div className='amount'>{props.amount}</div>
     {show ? (<button className='btn' onClick={()=> button()} >Add to cart</button>) :  (<button className='btn' onClick={()=> button()}>Remove form cart</button>)}
   
    </div>
  )
}

export default App;
