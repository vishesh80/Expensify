import { shallow } from "enzyme";
import moment from "moment";
import React from "react";
import { d as D } from "../../../raw/comp/Pages/Dashboard";
import eToJ from "enzyme-to-json";

const props = {
  filters: {
    text: "",
    startDate: null,
    endDate: null,
    sortBy: "amount",
  },

  expenses: [
    {
      description: "eg",
      amount: 100,
      createdAt: moment(0).add(1, "day"),
      id: "eg",
      dispatch: function (r) {
        return r;
      }
    }
  ]
};

test("Dashboard component test", () => {
  
  let wrapper = shallow(<D {...props} />);
  expect(eToJ(wrapper)).toMatchSnapshot();
});
