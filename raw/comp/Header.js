import React from 'react';
import {NavLink} from 'react-router-dom';
import {auth} from '../modules/firebase';

const Header = () => (<div>
    <h1>Expense Tracker</h1>
    <NavLink to="/dashboard" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" exact={true}>Create Expense</NavLink>
    <NavLink to="/help" exact={true}>Help</NavLink>
    <button onClick={e => auth.signOut()}>Logout</button>
</div>);

export default Header;