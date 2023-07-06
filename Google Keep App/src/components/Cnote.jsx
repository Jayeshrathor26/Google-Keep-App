import React from "react";
const Cnote=(props)=>{
    const deletNote=()=>{
        props.deleteItem(props.id);
    }
    return(
        <>
        <div className="cnote">
            <h3>{props.title}</h3>
            <p>{props.content }</p>
            <button className="cb" onClick={deletNote}>Delete</button>
        </div>
        </>
    )
}
export default Cnote;