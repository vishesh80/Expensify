import { shallow } from "enzyme";
import React from "react";
import ExpenseForm from '../../raw/comp/ExpenseForm';
import moment from 'moment';

import eToJ from "enzyme-to-json";

const initialState = {
    description: "eg",
    amount: 10,
    note: "eg",
    createdAt: moment(),
};


test('Testing ExpenseForm Component with no initialState',() => {

    const wrapper = shallow(<ExpenseForm/>);
    expect(eToJ(wrapper)).toMatchSnapshot();
});

test('Testing ExpenseForm Component with initialState', () => {

    const wrapper = shallow(<ExpenseForm initialState={initialState}/>);
    expect(eToJ(wrapper)).toMatchSnapshot();
});

test('Testing ExpenseForm Component listerner method', () => {

    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(0).simulate('change',{
        persist: () => { return 0},
        target: {value: 'eg'}
    });
    expect(wrapper.state('description')).toBe('eg');
});

test('Testing ExpenseForm Component submit method', () => {

    const submit = jest.fn();
    const wrapper = shallow(<ExpenseForm initialState={initialState} submit={submit}/>);

    wrapper.find('button').simulate('click', {
        persist: () => { return 0 }
    });
    expect(submit).toHaveBeenCalledWith(initialState);
});