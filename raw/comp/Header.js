import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (<div>
    <h1>Expense Tracker</h1>
    <NavLink to="/" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" exact={true}>Create Expense</NavLink>
    <NavLink to="/help" exact={true}>Help</NavLink>
</div>);

export default Header;