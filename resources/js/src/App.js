import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Routes, Link, Route } from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Home from "./components/Home";

function App() {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/edit/:id" element={<Edit />} />
                </Routes>
                
            </Router>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}