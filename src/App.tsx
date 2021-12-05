import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { TaskManager } from './pages/TaskManager'
import { TaskProvider } from './context/Task'

export const App: React.FC = () => {

  return (

    <TaskProvider>

      <BrowserRouter>

        <Switch>

          <Route path = "/" exact component = { Home } />
          <Route path = "/newtask" component = { TaskManager } />

        </Switch>

      </BrowserRouter>
      
    </TaskProvider>
    
  )

}
