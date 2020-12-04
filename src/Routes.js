import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import NewPost from './NewPost'


function Routes () {
    return (
        <Switch>
            <Route exact path="/new">
                <NewPost />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/:postId">
                <Post />
            </Route>

        </Switch>
    )
}

export default Routes;