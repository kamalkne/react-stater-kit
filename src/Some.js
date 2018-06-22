import React from 'react';
import {
    Link
} from 'react-router-dom';

import Card from './styles/components/card.style';
import a from '../static/images/a.jpg';

const Some = () => (
    <div className="some">
        <p> Someone here! </p>
        <Link to="/">Home</Link>
        <img src={a} alt="bohooo"/>
        <Card></Card>
    </div>
);

export default Some;
