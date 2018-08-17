import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should setup default filter values', () =>{
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const acction = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, acction);
    expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'filter testing'});
    expect(state.text).toBe('filter testing');
});

test('Should set startDate filter', () => {
    const startDate = moment();
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate});
    expect(state.startDate).toEqual(startDate);
});

test('Should set sortBy to amount', () => {
    const endDate = moment();
    const state = filtersReducer(undefined, { type: 'SET_END_DATE' , endDate});
    expect(state.endDate).toEqual(endDate);
});