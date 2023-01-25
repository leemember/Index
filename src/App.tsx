import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Domestic from './pages/domestic';
import Global from './pages/global';
import { hot } from 'react-hot-loader';
import NoData from './component/Common/Deviance';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Domestic />} />
                <Route path="/domestic" element={<Domestic />} />
                <Route path="/global" element={<Global />} />
                <Route path="/*" element={<NoData />} />
            </Routes>
        </Router>
    );
};

export default hot(module)(App);
