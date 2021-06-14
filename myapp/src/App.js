import './App.css';
import React, {useRef,useEffect,useState} from "react";
import axios from 'axios';

function App() {

  const nameInput = useRef(null);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  const clearInput = () => {
    nameInput.current.value = "";
    nameInput.current.focus();
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
    setPosts(response.data)
    console.log(response.data)})
  },[])
 

  return (
    <div className="App">
      
      <div className="input">
     <input type="text" placeholder ="write your name.." ref={nameInput} onChange={(event) => {
       setSearchTerm(event.target.value)
       }}
       />

     <button onClick={clearInput}>Submit</button>
     </div>

     {posts.filter((val) => {
       if(searchTerm == "") {
         return val
       }
       else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
         return val
       }
     }).map((val)=>{
       return <div className="user"> 
         <p key={val.id}>{val.title}</p> 
         </div>
     })}
    </div>
  );
}

export default App;
