import React from 'react';
import ReactDOM from 'react-dom';
import mainBrowswerRouter from './comp/MainBrowserRouter';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';

import {getAllExpenses, login, logout} from './modules/actions';
import setupStore from './modules/setupStore';
import filter from './modules/filter';
import {auth} from './modules/firebase';

import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

export const history = createBrowserHistory();

/* ---------------------------Redux--------------------------------*/

const redux = setupStore();

redux.subscribe(() => {
  const state = redux.getState();
  console.log(filter(state.expenses, state.filters));
});

/* ---------------------------React--------------------------------*/


const page = mainBrowswerRouter();
const jsx = (<Provider store = {redux}>{page}</Provider>);



ReactDOM.render(jsx, document.getElementsByTagName("div")[0]);

auth.onAuthStateChanged(user => {

  if(user){

    redux.dispatch(login(user.uid));

    ReactDOM.render(<h2>Loading...</h2>, document.getElementsByTagName("div")[0]);

    getAllExpenses(redux.dispatch,user.uid)
      .then((m) => { 

        ReactDOM.render(jsx, document.getElementsByTagName("div")[0]);
        history.push('/dashboard'); 

      })
      .catch((err) => console.log(err));
    
  } 
  
  else{
    redux.dispatch(logout());
    history.push('/');
  } 
  
  console.log("User", user);
});