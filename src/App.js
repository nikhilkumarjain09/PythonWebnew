import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import Home from './Home';
import PlayerToShow from './Player';
// import ExampleClass from './ExampleClass';
import './App.css';
function App() {
    return (
            <Routes>
            {/* <Route path='/player/:id' element={<ExampleClass/>}></Route> */}
            <Route path="/" element={<Home/>}></Route>
            <Route path="/player/:id" element={<PlayerToShow/>}></Route>
            </Routes>
    );
}
export default App;