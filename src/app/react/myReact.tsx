import React from "react";

import  "./myReact.style.css";

import { useNavigate } from "react-router-dom";


const MyReactComponent = () => {

  const navigate = useNavigate();

  return <main style={{width:"100%",height:"100vh",display:"flex", flexDirection:'column', alignItems:'center',justifyContent:"center"}}>

    <div style={{width:"500px",height:"300px",textAlign:'center',color:"#591852"}} className="text-center">

      <h1> React Element inside Angular Project</h1>

      <img style={{width:"500px",height:"300px"}} src="https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg" alt="react"/>

    </div>

    <div style={{width:"500px",height:"300px",textAlign:'center'}}>

      <button style={{
        padding:'10px',background:'#5A9F5AFF',
        border:'unset',outline:'unset',
        color:'white',fontWeight:'bolder',
        borderRadius:'4px',cursor:'pointer'}} onClick={() => { navigate("/react-details");}}>
        React Details
      </button>

    </div>

  </main>;
};

export default MyReactComponent;

