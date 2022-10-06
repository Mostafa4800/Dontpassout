import React from "react";
import Startpage from "./Pages/start_page/startpage.component";
import Agent from "./Pages/agent/agent.component";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
    return(
        <div className = "App" >
            <Router>
                <Routes>
                    <Route exact path="/" element={<Startpage/>} />
                    <Route exact path="/agent" element={<Agent/>} />
                </Routes>
            </Router>
        </div>
     );
}

export default App;