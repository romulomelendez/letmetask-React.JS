import logo from '../assets/images/logo.svg'
import task from '../assets/images/task.svg'
import facebookLogo from '../assets/images/facebook-logo.svg'

import { useHistory } from 'react-router-dom'

import '../styles/home.scss'

export const Home = () => {

    const history = useHistory()

    const handleLogin = () => {

        history.push('/newtask')
        
    }

    return (

        <div id = "app">

            <section id = "welcome-side">

                <img src = { task } alt = "welcome to the best task manager, LET ME TASK" />
                <p>Manager your tasks</p>
                <p>with a modern design</p>

            </section>

            <section id = "auth-side">

                <img src = { logo } alt = "letmetask" />

                <button>

                    <img src = { facebookLogo } alt = "facebook" />
                    <span>Entrar com Facebook</span>

                </button>

                <form onSubmit = { handleLogin }>

                    <input className = "input-email" type = "email" placeholder = "E-MAIL" />
                    <input className = "input-password" type = "password" placeholder = "PASSWORD" />

                    <button className = "button-login" type = "submit">LOGIN</button>

                </form>


            </section>

        </div>

    )
    
}
