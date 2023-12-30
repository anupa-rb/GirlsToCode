import React, { useState } from 'react'

const ToDo = () => {
    const [obj, setObj] = useState([])
    const [val, setVal] = useState('')
    const [checkedState, setCheckedState] = useState([]);

    const add = (e) => {
        e.preventDefault();
        setVal(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault();
        setObj([...obj, val])
        setCheckedState([...checkedState, false]);
        setVal('')
    }
    const del = (index) => {
        let newobj = [...obj];
        newobj.splice(index, 1)
        // e.preventDefault();
        setObj(newobj)
    }
    const handleCheckbox = (index) => {
        const newCheckedState = [...checkedState];
        newCheckedState[index] = !newCheckedState[index];
        setCheckedState(newCheckedState);
    }
    return (
        <>
            <h1 >To-Do List</h1>
            <form>
                <input
                    type={"text"}
                    value={val}
                    onChange={add} />
                <button onClick={handleClick}>ADD</button>
            </form>

            <table style={{ border: '2px solid white' }}>
                <tr><th >Tasks</th></tr>
                {obj.map((x, index) => (
                    <tr>
                        <input type="checkbox" checked={checkedState[index]} onClick={() => handleCheckbox(index)}></input>
                        <td key={index} style={{ textDecoration: checkedState[index]? 'line-through' : '' }}>{x}</td><button onClick={() => del(index)}>Delete</button>
                    </tr>))}
            </table>


        </>
    );
};
export default ToDo

