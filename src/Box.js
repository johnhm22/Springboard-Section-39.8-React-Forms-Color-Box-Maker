import React from "react";
import './Box.css'

const Box = ({id, color, width, height, deleteBox}) => {     
    const handleDelete = () => {
        deleteBox(id);
    }


    return (
        <>
        <div data-id = {id}>
        <div
        style={{
            backgroundColor: color,
            width: `${width}px`,
            height: `${height}px`,
        }}
        >
        </div>
         <button onClick={handleDelete}>X</button>
         </div>
         </>
    )
}

export default Box;