import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './Components/SideBar';
import UseImageContext from './contextAPI/UseImageContext';

function App() {
  return (
    
    <Router>
      <UseImageContext>
      <SideBar />
      </UseImageContext>
    </Router>
  );
}

export default App;
