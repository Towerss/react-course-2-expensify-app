import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render expenses summary with one expense and total', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={250} />);
    expect(wrapper).toMatchSnapshot();
});


test('Should render expenses summary with multiple expenses and total', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={5461654} />);
    expect(wrapper).toMatchSnapshot();
});