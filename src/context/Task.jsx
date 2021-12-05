import React, { createContext, useState } from 'react'

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {

    const [task, setTask] = useState('')
    const [status, setStatus] = useState('pending')
    const [todoList, setTodoList] = useState([])

    return (

        <TaskContext.Provider value = {{
            
            todoList,
            setTodoList,
            task,
            setTask,
            status,
            setStatus,
            
            }}>
            
            { children }

        </TaskContext.Provider>

    )

}

