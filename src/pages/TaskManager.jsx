import { Task } from '../components/Task/index'

import { useContext } from 'react'
import { TaskContext } from '../context/Task'

import { database } from '../services/firebase'

import  '../styles/taskmanager.scss'

export const TaskManager = () => {

    const { todoList, setTodoList, task, setTask } = useContext(TaskContext)

    const handleCreateTask = async ( taskName ) => {
        
        if ( taskName.trim() !== '' ) {

            // creating an object to send to the database
            const newTask = {
                
                name: taskName,
                status: 'pending',
                
            }
            
            //  adding object with the new values into the array
            setTodoList([newTask, ...todoList])
            
            //  adding datas in the database
            //await database.collection('tasks').add(newTask)   another way to add on database
            await database.collection('tasks').doc(taskName).set(newTask)

            //  debug
            console.log('added on database')
            
            //  cleaning input task
            const taskInput = window.document.querySelector('input#new-task')
            taskInput.value = ''
            
        } else
        
            alert('Not added on database, input is empty!')

    }

    return (

        <div id = "taskmanager">

            <main id = "main-container">

                <section id = "section-new-task">

                    <input id = "new-task" type = "text" placeholder = "New Todo" onChange = { (event) => setTask(event.target.value) } />
                    <button onClick = { () => handleCreateTask(task) }>Add New Task</button>

                </section>

                <section id = "alltasks">

                    <Task />

                </section>

            </main>

        </div>

    )
    
}
