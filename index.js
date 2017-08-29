import React from 'react';
import {render} from 'react-dom';
import {BrowseRouter} from 'react-router-dom';
import App from './components/app.js';

render((
    <BrowseRouter>
        <App />
    </BrowseRouter>
),document.getElementById('root'));