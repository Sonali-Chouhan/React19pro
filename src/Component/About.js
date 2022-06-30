import React,{useState} from "react";
import {useNavigate} from "react-router-dom"
import { DeleteOutlined,PlusOutlined,CheckSquareOutlined,EditOutlined} from "@ant-design/icons";
const Profile = () => {
    const [state, setstate] = useState({
      fname: "",
      lname: "",
      contact: "",
      email: "",
      id: ""
    });
    const navigate=useNavigate();
    const [data, setdata] = useState([]);
    const handleDelete = (id) => {
      const item = data;
      item.splice(id, 1);
      setdata([...data], item);
    };
    const handleEdit = (id) => {
      const items = data[id];
      setstate({
        ...state,
        fname: items.fname,
        lname: items.lname,
        contact: items.contact,
        email: items.email,
        id: id
      });
    };
    const handleSubmit = (e) => {
      const obj = state;
      e.preventDefault();
      if (state.id) {
        const newdata = data.splice(state.id, 1, state);
        setdata([...data], newdata);
      } else {
        data.push(obj);
        setdata(data);
      }
  
      setstate({
        ...state,
        obj,
        fname: "",
        lname: "",
        contact: "",
        email: ""
      });
    };
    return (
      <div>
         <center>
        <button onClick={()=>navigate("/")}>Back-to-Home</button><br/>
        <form>
          <input
          className="input"
            type="text"
            value={state.fname}
            onChange={(e) => setstate({ ...state, fname: e.target.value })}
          /><br></br>
          <input
            type="text"
            className="input"
            value={state.lname}
            onChange={(e) => setstate({ ...state, lname: e.target.value })}
          /><br></br>
          <input
            type="text"
            className="input"
            value={state.contact}
            onChange={(e) => setstate({ ...state, contact: e.target.value })}
          /><br></br>
          <input
            type="text"
            className="input"
            value={state.email}
            onChange={(e) => setstate({ ...state, email: e.target.value })}
          /><br></br>
  
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            {state.id ? <CheckSquareOutlined/>  : <PlusOutlined />}
          </button>
        </form>
       
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Fname</th>
              <th>lname</th>
              <th>contact</th>
              <th>email</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((x, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{x.fname}</td>
                  <td>{x.lname}</td>
                  <td>{x.contact}</td>
                  <td>{x.email}</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>
                      <DeleteOutlined />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleEdit(index)}>
                      <EditOutlined />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </center>
      </div>
    );
  };
  export default Profile;
  
  