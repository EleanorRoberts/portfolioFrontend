import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.scss';
import Home from "./Components/Templates/Home";
import WorkExperience from "./Components/Templates/WorkExperience";
import Projects from "./Components/Templates/Projects";
import NavBar from "./Components/Molecules/NavBar";
import NotFound from "./Components/Pages/NotFound";
import ContactMe from "./Components/Molecules/ContactMe";
import Login from "./Components/Templates/Login";

function App() {
    return (
        <Router>
            <NavBar />
            <div className={"content"}>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/work-experience" element={ <WorkExperience /> } />
                    <Route path="/projects" element={ <Projects /> } />
                    <Route path="/login" element={ <Login /> } />
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
                <ContactMe />
            </div>
        </Router>
    );
}

export default App;
