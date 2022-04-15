 import React from "react";
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
 import { ErrorBoundary } from 'react-error-boundary'
 //pages
 import Home from './pages/Home'
 import PersonalTargets from './pages/PersonalTargets'
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
                <Route path='/savingslobster' element={<Home/>}/>
                <Route path='/savingslobster/personaltargets' element={<PersonalTargets/>}/>
                <Route path='/savingslobster/*' element={<Error/>}/>
            </Routes>
            </ErrorBoundary>
        </Router>
    )
}

export default App
 