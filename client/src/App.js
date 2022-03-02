import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard.js'
import Login from './Components/Login.js';
import PrivateRoute from './Components/PrivateRoute.js';
import Signup from './Components/Signup.js';
import { AuthProvider } from './contexts/AuthContext.js';



function App() {
  return (
    <Router>
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<PrivateRoute/>}>
          <Route exact path="/" element={<Dashboard/>}/>
        </Route>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </AuthProvider>
    </Router>
  );
}

export default App;
