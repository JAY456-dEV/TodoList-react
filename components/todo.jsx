import React, { useState } from 'react'

export const Todo = ({ info, deleteItem, checkEditable, setEditedValue }) => {

    const [value, setValue] = useState(info.task)

    function sendEditData() {
        setEditedValue(info.id, value)
    }

    return (
        <>
            <div className='main-Todo'>
                {info.isEditable ? <input type="text" value={value} placeholder='enter Edit task' onChange={(e) => setValue(e.target.value)} /> : <p>{info.task}</p>}
                <div className='buttonMain'>
                    {
                        info.isEditable ? <button onClick={() => sendEditData()}>Update</button> : <button onClick={() => checkEditable(info.id)}>Edti</button>
                    }
                    <button onClick={() => deleteItem(info.id)}>Delete</button>
                </div>
            </div >
        </>
    )
}
