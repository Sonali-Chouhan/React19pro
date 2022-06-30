import React, { useState ,useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Feature = () => {
   const [state,setState]=useState([])
   const [search,setSearch]=useState("")
   const navigate=useNavigate();
  
   const fetchTodos= async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setState(data);
    console.log("s", state);
  };
  useEffect(() => {
    fetchTodos();
  },[])
  

  return (
    <div>
        <button onClick={()=>navigate("/")}>Back-to-Home</button><br/>
      <input   placeholder="Search..." type="text" onChange={(e)=>setSearch(e.target.value)}/>
      <ul>
        {
          state.splice(0,10).filter((item)=>{
            if(search===""){
              return item;
            }else if (item.title.toLowerCase().includes(search.toLowerCase())) {
             return item
            }
            
          }).map((d) => {
            return <li key={d.id}>{d.title}</li>;
          })}
        
      </ul>
   
    </div>
  );
};

export default Feature;
