import {shallow} from 'enzyme';
import React from 'react';
import Header from '../../raw/comp/Header';
import eToJ from 'enzyme-to-json';

test('Header component test',() => {

    let wrapper = shallow(<Header/>);
    expect(eToJ(wrapper)).toMatchSnapshot();
});


