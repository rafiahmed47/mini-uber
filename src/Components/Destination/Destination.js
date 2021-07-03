import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FakeData from '../../FakeData.json'

const Destination = () => {
    const [input, setInput] = useState('')
    const handleChange = event =>{
        console.log(event.target?.value);
        setInput(event.target.value)
    }
    // const handleSubmit = () =>{
    //     if (handleToChange && handleFromChange) {
            
    //     }
    // }
    const {type} = useParams();
    const data = FakeData.find(pd => pd.name === type)
    const {name, img} = data;
    return (
        <div>
            <div>
                <form>
                    <label>Pick from</label> <br />
                    <input type="text" name="PickTo" onChange={handleChange} placeholder="Where you are"/> <br />
                    <label>Pick to</label> <br />
                    <input type="text" name="PickFrom" onChange={handleChange} />
                </form>
            </div>
            <h1>This is destination type is {name}</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default Destination;