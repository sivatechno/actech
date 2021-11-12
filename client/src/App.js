import React from 'react';
import Login from './pages/Login';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
   <div>
     <Router>
       <Routes>
            <Route path="/" element={<Login />} />
       </Routes>
     </Router>
   </div>
  );
}

export default App;
