import React from 'react';
import {auth , googleAuth} from '../../modules/firebase';

const l = () => (

<div>
    <h1>Login</h1>
    <button onClick={e => auth.signInWithPopup(googleAuth)}>Login</button>
</div>

);

export default l;