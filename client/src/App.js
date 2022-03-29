import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Chapter from './Components/Internal/Chapter.js'
import Dashboard from './Components/Internal/Dashboard.js'
import Login from './Components/External/Login.js';
import Signup from './Components/External/Signup.js';
import { AuthProvider } from './contexts/AuthContext.js';

import PrivateRoute from './Components/PrivateRoute.js';
import LoginRoute from './Components/LoginRoute.js';
import { ChapterProvider } from './contexts/ChapterContext.js';
import Home from './Components/External/Home.js'
import GenericNotFound from './Components/GenericNotFound.js';



function App() {
  return (
    <Router>
    <AuthProvider>
      <ChapterProvider>
        <Routes>

          <Route exact path="/home" element={<Home/>}/>
          <Route path="/signup" element={<LoginRoute/>}>
            <Route path="/signup" element={<Signup/>}/>
          </Route>
          <Route path="/login" element={<LoginRoute/>}>
            <Route path="/login" element={<Login/>}/>
          </Route>
          <Route exact path="/i/chapter" element={<PrivateRoute/>}>
              <Route exact path="/i/chapter" element={<Chapter/>}/>
          </Route>
          <Route exact path="/i/dashboard" element={<PrivateRoute/>}>
              <Route exact path="/i/dashboard" element={<Dashboard/>}/>
          </Route>
        </Routes>
      </ChapterProvider>

    </AuthProvider>
    </Router>
  );
}

export default App;
