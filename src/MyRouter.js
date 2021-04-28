import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/home'
import Planets from './components/Planets'
import Satellites from './components/Satellites'
import Moons from './components/Moons'
import Stars from './components/Stars'

function Routing() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/planets">
                    <Planets />
                </Route>
                <Route path="/satellites">
                    <Satellites />
                </Route>
                <Route path="/moons">
                    <Moons />
                </Route>
                <Route path="/stars">
                    <Stars />
                </Route>
            </Switch>
        </>
    )
}

export default Routing