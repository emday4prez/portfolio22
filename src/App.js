import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Bio from './components/Bio';


function App() {
  return (
    
    <div className='App'>
          <Navigation/>            
          <Routes>   
              <Route path='/' element={<Home/>}/>                        
              <Route path='/contact' element={<Contact/>}/> 
              <Route path='/projects' element={<Projects/>}/>  
              <Route path='/bio' element={<Bio/>}/>  
                        
          </Routes>
    </div>
  );
}

export default App;
