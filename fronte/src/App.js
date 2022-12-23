import './App.css';
import Dashboard from './Dashboard/dashBoard';
import Navbar from './Dashboard/SurveyButtons/shared/navBar/navBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Treatment from './Dashboard/SurveyButtons/shared/Treatpage/Treatment';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
       <Routes>
       <Route path="*" element={<Dashboard />} />  
      <Route path="/Treatment" element={<Treatment />} />
      </Routes>
    </Router>
      <div className="App-header">
        {/* <Dashboard /> */}
      </div>
    </div>
  );
}

export default App;
