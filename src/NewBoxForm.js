import React, {useState} from 'react';


    const NewBoxForm = ({addBox}) => {
        const INITIAL_STATE = {color: "",
        height: "",
        width: ""
        };



        const [formData, setFormData] = useState(INITIAL_STATE)

        const handleChange = e => {
            const {name, value} = e.target;
            setFormData(formData => ({
                ...formData,
                [name]: value
            }));
        }
    
        const handleSubmit = (e) => {
            const {color, height, width} = formData;
            e.preventDefault();
            addBox(color, height, width);
            setFormData(INITIAL_STATE);
        }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color"></label>
            <input type="text" name="color" placeholder="Background color" id="color" value={formData.color} onChange={handleChange}></input>
            <label htmlFor="height"></label>
            <input type="text" name="height" placeholder="Height" id="height" value={formData.height} onChange={handleChange}></input>
            <label htmlFor="width"></label>
            <input type="text" name="width" placeholder="Width" id="width" value={formData.width} onChange={handleChange}></input>
            <button onClick={handleSubmit}>Add box</button>
        </form>


    )
}

export default NewBoxForm;