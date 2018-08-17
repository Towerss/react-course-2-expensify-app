import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
    const filters = {
        text:'e',
        sortedBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2]]);
});

test('should filter by startDate', () => {
    const filters = {
        text:'',
        sortedBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[2]]);
});

test('should filter by endDate', () => {
    const filters = {
        text:'',
        sortedBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
    const filters = {
        text:'',
        sortedBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should sort by amount', () => {
    const filters = {
        text:'',
        sortedBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1], expenses[2]]);
});