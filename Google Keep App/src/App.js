import React, { useState } from "react";
import Header from "./Header";
import Knotes from "./Knotes";
import Cnote from "./Cnote";
import Footer from "./Footer";
import "./responsive.css";

const App=()=> {
  const[addItem,setItem]=useState([])
  const addNote=(note)=>{
       setItem((prevData)=>{
        return[...prevData,note]
       })
      console.log(note)
  }
  const onDelete=(id)=>{
    setItem((oldData)=>
    oldData.filter((curData,index)=>{
      return index !== id;
    })
    )
  }
  return (
    
 <>
 <Header/>
 <Knotes passNote={addNote}/>

{ addItem.map((val,index) =>{
   return ( <Cnote 
   key={index}
   id={index}
   title={val.title}
   content={val.content}
   deleteItem={onDelete}
   />
 )})}
 <Footer/>
 </>
  );
}

export default App;
