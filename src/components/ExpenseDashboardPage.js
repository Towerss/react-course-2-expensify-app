import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpenseList from './ExpenseList';
import ExpenseListfilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListfilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;