//practice api call
import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Newproduct = () => {
  const [Item, setItem] = useState([]);
  const [search, setSearch] = useState("");
  const navigate=useNavigate();

  const fetchData = async () => {
  
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setItem(data);
    console.log("ss", Item);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={()=>navigate("/")}>Back-to-Home</button><br/>
      <input
        className="search"
        placeholder="Enter Title ..........."
        onChange={(event) => setSearch(event.target.value)}
      /> 
      <div>
      <ul>
        {Item?.filter((x) => {
          if (search === "") {
            return x;
          } else if (x.name.toLowerCase().includes(search.toLowerCase())) {
            return x;
          }
        }).map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
      </div>
    </div>
  );
};

export default Newproduct;
