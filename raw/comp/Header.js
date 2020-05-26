import React from 'react';
import {NavLink} from 'react-router-dom';
import {auth} from '../modules/firebase';

const Header = () => (<div className="header">
    <NavLink to="/dashboard" exact={true} className="navlink">Expensify</NavLink>
    <button onClick={e => auth.signOut()}>Logout</button>
</div>);

export default Header;

// <NavLink to="/create" exact={true}>Create Expense</NavLink>
//<NavLink to="/help" exact={true}>Help</NavLink>