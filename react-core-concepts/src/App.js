import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var name = "Farjana";
  var person ={
    name :"shimu",
    job:"web developer"
  }
  var style = {
    color:'red',
    backgroundColor :'orange'
  }
  const nayoks =["Anowar","Jashim","Bapparaj","Salman","Alomgir","Shakib"]
  const products =[
    {name:'photoshop', price:'$99.99'},
    {name:'Illustrator', price:'$100.66'},
    {name:'PDF Reader', price :'$6.99'},
    {name:'PDF Reader', price :'$6.99'}
  
  ]

  // nayok er kaj
  const nayokNames = nayoks.map(nk=>nk);
  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <User></User>
        <Counter></Counter>
         <ul>
           {
             nayoks.map(nk=><li>{nk}</li>)
           }
           
           {
             products.map(pd=><li>{pd.name}</li>)
           }
         </ul>
         {
           products.map(pd =><Product product1 ={pd}></Product>)
         }
        <Product product1 ={products[0]}></Product>
        <Product product1 ={products[1]}></Product>
        <Product product1 ={products[2]}></Product>
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <h1 style ={style}>My Heading:{(20+5)*2}</h1>
        <h2 style ={{backgroundColor:'cyan', color:'red'}}>My seceond heding:{name}</h2>
       <h3>position : {person.name + " " + person.job}</h3>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>my first react pragraph</p>
        <Person name="Azhar" nayika ="Farjana"></Person>
        <Person name ="Shawon" nayika = "popy"></Person>
        <Person name ="Razzak" nayika ="kobori"></Person>
        
      </header>
    </div>
  );
}
function Person(props){
  const personStyle = {
    border:'2px solid red',
    margin:'10px',
    width :'400px'
   

  }
  return( 
  <div style={personStyle}>
    <h2>Name {props.name}</h2>
    <p>Hero of {props.nayika}</p>
  </div>
  )
}

function Product (props){
  const productStyle={
      border :"1px solid",
      borderRadius :"10px",
      backgroundColor:"lightgray",
      height:"200px",
      width:"200px",
      float :"left"
  } 
  const {name, price} =props.product1;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )

}

function Counter(){
 const[count, setCount] = useState(0);
 const handleIncrease =()=>{
   const newCount = count + 1;
   setCount(newCount);
 };
 const handleDecrease = ()=>{
   if(count>0){
    const newCount = count - 1;
    setCount (newCount);
   }
  
 };
  return(
    <div>
      <h1>count : {count}</h1>
      <button onClick = {handleDecrease}>decrease</button>
      <button onClick ={handleIncrease}>Increase</button>
    </div>
  )
}
// api load
function User(){
  const[users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data =>setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic user:{users.length}</h3>
      <ul>
        {
          users.map(us=><li>{us.name}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
