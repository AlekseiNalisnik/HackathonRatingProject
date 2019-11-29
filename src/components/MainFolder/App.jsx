import React, { Component } from "react";
import '../../styles/Style.css';
import AuthContainer from '../Authorization/AuthContainer';
import RegContainer from '../Registration/RegContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../store/Reducers';
import { BrowserRouter, Route } from 'react-router-dom';
import CommentForm from '../Comments/CommentForm';

import NewMainContainer from '../NewMain/NewMainContainer';
import Single from '../NewMain/Single';

const store = createStore(rootReducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Route path='/registration' component={RegContainer} exact />
                        <Route path='/' component={AuthContainer} exact />
                        <Route path='/NewMain' component={NewMainContainer} exact />
                        <Route path='/comment' component={CommentForm} exact />
                    </div>
                    <div className="App">
                        <Route path='/single/:id' component={Single} exact />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;