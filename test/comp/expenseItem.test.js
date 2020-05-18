import { shallow } from "enzyme";
import moment from 'moment';
import React from "react";
import { ExpenseItem } from "../../raw/comp/ExpenseItem";
import eToJ from "enzyme-to-json";

test("ExpenseItem component test", () => {

    const props = {
      description: "eg",
      amount: 12,
      createdAt: moment(0),
      id: "eg",
      dispatch: function (r) {
        return r;
      }
    };

    let wrapper = shallow(<ExpenseItem {...props} />);
    expect(eToJ(wrapper)).toMatchSnapshot();
});
