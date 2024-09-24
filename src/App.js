import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import {Routes, Route,} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Cigarette from "./Pages/Cigarette/Cigarette";
import Propose from "./Pages/Propose/Propose";
import Statistics from "./Pages/Statistics/Statistics";
import NavTop from "./Components/NavTop/NavTop";
import './App.css'
import Footer from "./Components/Footer/Footer";





const App = () => {
    return (

        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >

           <div className="App">
            <NavTop/>
               
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="cigarette" element={<Cigarette />} />
                <Route path="propose" element={<Propose />} />
                <Route path="statistics" element={<Statistics />} />
            </Routes>



               <div className="modal-footer">
            <Footer/>
               </div>
           </div>

        </ThemeProvider>
    );
};


export default App;