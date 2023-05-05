import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom";
import About from '../pages/about';
import Education from '../pages/education';
import Experience from '../pages/experience';
import Language from '../pages/language';
import MainSkills from '../pages/mainSkills';
import Portfolio from '../pages/portfolio';
import SideSkills from '../pages/sideSkills';


const AppRouter = () => {
    return (
        <Routes>
            <Route  path='/about'
                    element={<About/>}
            >
            </Route>
            <Route  path='/education'
                    element={<Education/>}
            >
            </Route>
            <Route  path='/mainskills'
                    element={<MainSkills/>}
            >
            </Route>
            <Route  path='/sideskills'
                    element={<SideSkills/>}
            >
            </Route>
            <Route  path='/languages'
                    element={<Language/>}
            >
            </Route>
            <Route  path='/portfolio'
                    element={<Portfolio/>}
            >
            </Route>
            <Route  path='/experience'
                    element={<Experience/>}
            >
            </Route>
            <Route  path='*'
                    element={<Navigate replace to="/about" />}
            >
            </Route>
        </Routes>
    );
}

export default AppRouter;
