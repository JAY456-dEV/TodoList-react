import React, { useState } from 'react'
import { Todo } from './todo'

export const SubForm = () => {
    const [task, setTask] = useState('')

    const [todos, setTodos] = useState([])

    function sendData(e) {
        e.preventDefault()

        if (!task) return
        setTodos([...todos, { id: crypto.randomUUID(), task, isEditable: false }])
    }

    function deleteItem(id) {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    function checkEditable(id) {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isEditable: !todo.isEditable } : todo))
    }

    function setEditedValue(id, task) {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, task, isEditable: !todo.isEditable } : todo))
    }


    return (
        <>
            <h1>ToDo lIST</h1>
            <form onSubmit={sendData}>
                <input type="text" placeholder='enter task' className='inputFeild' onChange={(e) => setTask(e.target.value)} />
                <button className='subBtn' type='submit'>Add</button>
            </form>

            {
                todos.map((info) => {
                    return (
                        <Todo info={info} deleteItem={deleteItem} checkEditable={checkEditable} setEditedValue={setEditedValue} />
                    )
                })
            }
        </>
    )
}
