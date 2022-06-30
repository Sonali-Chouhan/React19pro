import React from 'react';
import {useNavigate} from "react-router-dom"

const Notmatch = () => {
  const navigate=useNavigate();
  return (
    <div>
       <button onClick={()=>navigate("/")}>Back-to-Home</button><br/>
        <h2>
            Page-Not-Found
        </h2>
    </div>
  )
}

export default Notmatch;