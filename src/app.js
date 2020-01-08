import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './todoList';
import Counter from './Components/Counter';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Counter />
                </div>
            </Provider>
        );
    }
}