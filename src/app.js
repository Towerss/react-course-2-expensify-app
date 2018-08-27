import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense, startSetExpenses } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from './actions/filters';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import expenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();


/*
store.dispatch(addExpense({description: 'Water Bill', note: '', amount: 4500, createdAt: 200}));
store.dispatch(addExpense({description: 'Gas Bill', note: '', amount: 1000, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', note: '', amount: 109500, createdAt: 300}));


// store.dispatch(setTextFilter('water'));
// setTimeout(() =>{
//     store.dispatch(setTextFilter('bill'));
// }, 3000)


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
*/

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});