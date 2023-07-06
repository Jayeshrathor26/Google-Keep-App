import React, { useState } from "react";

const Knotes=(props)=> {
  const [note,setNote]=useState({
    title:"",
    content:"",
  })
  const InputEvent =(event)=>{
    const{name,value}=event.target;
      setNote((prevData)=>{
        return {
          ...prevData,
          [name]:value,
        };
      }) ;
      console.log(note)
  };
  const addEvent=()=>{
           props.passNote(note)
           setNote({
            title:"",
            content:"",
          })
  }
  return (
    <>
 <div className="fn">
    <form action="#">
        <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Tittle"/>
        <textarea name="content" id=""  value={note.content} onChange={InputEvent} placeholder="write a note..." autoComplete="off"></textarea>
        <button onClick={addEvent}>+</button>
    </form>
 </div>
 </>
  );
}

export default Knotes;
