// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import PropertyList from './components/PropertyList';
import PropertyForm from './components/PropertyForm';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/properties" component={PropertyList} />
                <Route path="/property-form" component={PropertyForm} />
                <Route path="/" exact component={PropertyList} />
            </Switch>
        </Router>
    );
};

export default App;
