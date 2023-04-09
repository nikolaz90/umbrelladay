 import React from "react";
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
 import { ErrorBoundary } from 'react-error-boundary'
 //pages
 import Home from './pages/Home'
 import PersonalTargets from './pages/PersonalTargets'
 import About from './pages/About'
 import Error from './pages/Error'
 //components 
 import Navbar from './components/Navbar'
 import Fallback from "./components/Fallback";


const handleError = (error, errorInfo)=>{
    console.log('Logging error : ', error, errorInfo)
}

function App(){
    return(
        <Router>
            <ErrorBoundary FallbackComponent={Fallback} onError={handleError}>
            <Navbar/>
            <Routes>
                <Route path='/pers_projects/umbrelladay' element={<Home/>}/>
                <Route path='/pers_projects/umbrelladay/personaltargets' element={<PersonalTargets/>}/>
                <Route path='/pers_projects/umbrelladay/about' element={<About/>}/>
                <Route path='/pers_projects/umbrelladay/*' element={<Error/>}/>
            </Routes>
            </ErrorBoundary>
        </Router>
    )
}

export default App
 