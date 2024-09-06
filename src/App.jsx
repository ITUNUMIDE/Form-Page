
import FormPage from "./components/FormPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayPage from './components/DisplayPage';


const App = () => {
  
    return (
      <div style={{marginTop:'12%', width:'100%'}}>
             <Router>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/display" element={<DisplayPage />} />
        </Routes>
      </Router>
  
      </div>
    )
  
}

export default App