import React from 'react';
import Main from './components/Main';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';
import { FeedbackProvider } from './context/feedback';

const store = configureStore();

const App: React.FC = () => {
    return (
        <FeedbackProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </Provider>
        </FeedbackProvider>
    );
};

export default App;
