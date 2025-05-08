import React from "react";

import "./myReact.style.css"

import {useNavigate} from "react-router-dom";


const MyReactSecond = () => {

  const navigate = useNavigate();


  return <main style={{width: "100%", height: "100vh", display:"flex", flexDirection:'column', alignItems:'center',justifyContent:"center"}}>

    <h1> React Element Details</h1>

    <div style={{width: "500px", height: "300px", textAlign: 'center', color: "#591852", border:'2px solid #591852',marginTop:'10px'}} className="text-center">

      <p style={{textAlign: "left",fontWeight:'bolder',borderRadius:'4px',padding:'10px'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <div style={{width:"500px",height:"300px",textAlign:'center'}}>

        <button style={{
          padding:'10px',background:'#77031c',
          border:'unset',outline:'unset',
          color:'white',fontWeight:'bolder',
          borderRadius:'4px',cursor:'pointer'}} onClick={() => { navigate("/dashboard");}}>
          Home
        </button>

      </div>

    </div>

  </main>;
};

export default MyReactSecond;
