import React from 'react';
import {
    Link
} from 'react-router-dom';

const App = () => (
    <div>
        <p> React here! </p>
        <Link to="/some">Some</Link>
    </div>
);

export default App;
// ReactDOM.render( < App / > , document.getElementById('app'));
