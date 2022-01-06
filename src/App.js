import React from "react"
import { Switch, Route, Router } from 'react-router-dom'

const readyPlayerOne = () => (<div>Ready Player One?</div>)
const readyPlayerTwo = () => (<div>Ready Player Two?</div>)

export default ({ history }) => {
    return <div>
        <Router history={history}>
            <Switch>
                <Route path="/playerTwo" component={readyPlayerTwo} />
                <Route path="/" component={readyPlayerOne} />
            </Switch>
        </Router>
    </div>
}