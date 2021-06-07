import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Repositories from "./pages/Repositories";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <Repositories />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
