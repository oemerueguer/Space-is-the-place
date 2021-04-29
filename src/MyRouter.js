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
                <Route path="/home/:page?">
                    <Home />
                </Route>
                <Route path="/planets/:page?">
                    <Planets />
                </Route>
                <Route path="/satellites/:page?">
                    <Satellites />
                </Route>
                <Route path="/moons/:page?">
                    <Moons />
                </Route>
                <Route path="/stars/:page?">
                    <Stars />
                </Route>
            </Switch>
        </>
    )
}

export default Routing