import React from 'react';
import {auth , googleAuth} from '../../modules/firebase';

const l = () => (
  <div className="background">
    <div className="modal">
      <h1>Expensify</h1>
      <p>Its time to get your expenses under control.</p>
      <button onClick={(e) => auth.signInWithPopup(googleAuth)}>Login with Google</button>
    </div>
  </div>
);

export default l;