import React from 'react';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';

export default function App() {
    return (
        <Provider store={Store}>
            <Navigation />
        </Provider>)
        ;
}
