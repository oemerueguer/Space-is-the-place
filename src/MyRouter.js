import { Switch, Route } from 'react-router-dom'
import Home from './components/home'

function Routing() {
    return (
        <>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
{/*                 <Route path="/planets">
                    <Planets />
                </Route> */}
            </Switch>
        </>
    )
}

export default Routing