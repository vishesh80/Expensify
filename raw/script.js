import React from 'react';
import ReactDOM from 'react-dom';
import mainBrowswerRouter from './comp/MainBrowserRouter';
import {Provider} from 'react-redux';

import * as Actions from './modules/actions';
import setupStore from './modules/setupStore';
import filter from './modules/filter';

import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';


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

