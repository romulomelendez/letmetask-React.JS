import { useContext } from 'react'
import { TaskContext } from '../../context/Task'

import { database } from '../../services/firebase'

import './style.scss'

export const Task = () => {

    const { todoList, setTodoList } = useContext(TaskContext)


    //  function to handle task delete in database
    const handleDeleteTask = async ( task ) => {

        
        try {
            
            // deleting from the tasks array list
            let newArr = todoList.filter(todo => todo.name !== task.name)
            setTodoList(newArr)

            //delete task on database
            await database.collection('tasks').doc(task.name).delete()

        } catch ( error ) {

            console.error(error.message)

        }
    
    }

    return (

        <div className = "task-container">

            {
                    
                todoList.length !== 0 ? todoList.map( (task, index) => {

                    return (

                        <div className = "task" key = { index }>

                            <div>

                                <h3>{ task.name }</h3>
                                <h5>{ task.status }</h5>

                            </div>

                            <div>

                                <button type = "buttton" onClick = { () => handleDeleteTask(task) }>

                                    <strong>X</strong>

                                </button>

                            </div>

                        </div>                        

                    )

                })

                : <p>No Tasks yet!</p>
                              
            }

        </div>

    )
    
}

