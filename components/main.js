import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './home.js';
import Rouster from './rouster.js';
import Schedule from './schedule.js';

const Main = () => {
    <main>
        <Switch>
            <Route exact path="/" component={home} />
            <Route path="/rouster" component={Rouster} />
            <Route path="/schedule" component={Schedule} />
        </Switch>
    </main>
}

export default Main;