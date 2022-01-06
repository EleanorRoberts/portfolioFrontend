import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Home from "./Components/Templates/Home";
import WorkExperience from "./Components/Templates/WorkExperience";
import Projects from "./Components/Templates/Projects";
import NavBar from "./Components/Molecules/NavBar";

function App() {
    return (
        <Router>
            <NavBar />
            <div className={"content"}>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/work-experience" element={ <WorkExperience /> } />
                    <Route path="/projects" element={ <Projects /> } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
