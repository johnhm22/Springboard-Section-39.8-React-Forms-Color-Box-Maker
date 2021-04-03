import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid} from 'uuid';

const BoxList = () => {
    const INITIAL_STATE = [
        // {id: uuid(), color: "blue", height: 30, width: 30}
    ];

    const [boxes, setBoxes] = useState(INITIAL_STATE)

    const addBox = (color, height, width) => {
        setBoxes(boxes => [...boxes, { id: uuid(), color, height, width }])
    }

    const deleteBox = (id) => {
        setBoxes(boxes.filter(b => b.id !== id));
    }


    return (
        <div>
            <h3>Box List</h3>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(({id, color, width, height}) => <Box id={id} color={color} width={width} height={height} deleteBox={deleteBox}/>)}
            </div>
        </div>

    )


}

export default BoxList;