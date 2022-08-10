import React from 'react'
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux/es/exports";
import { getApi } from 'for_redux/dist/Redux/Action/Action'
const App = () => {
   const dispatch = useDispatch();
   const state = useSelector(state => state.reducer.List);
   console.log("Gg",state);
  useEffect(() => {
    dispatch(getApi());
  }, [])

  return (
    <div>App</div>
  )
}

export default App
