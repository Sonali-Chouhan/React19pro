import React, { useState } from "react";
// import { useDebounce } from "react-debounce-hook";
import { useDebugValue } from "react";

function Data() {
  const [values, setValues] = useState();
  const [usedebugValue, setuseDebugValue] = useState();
  
  useDebugValue(values, setuseDebugValue);

  return (
    <div className="app">
      <input
        label="Insert text"
        onChange={(e)=>setValues(e.target.value)}
      />
      <p>
        The blue box below will update the text after you stop typing
      </p>
      <h1>{usedebugValue}</h1>
    </div>
  );
}
export default Data;

