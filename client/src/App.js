import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Chapter from './pages/internal/Chapter.js'
import Dashboard from './pages/internal/Dashboard.js'
import Login from './pages/external/Login.js';
import Signup from './pages/external/Signup.js';
import Home from './pages/external/Home.js'

import { AuthProvider } from './contexts/AuthContext.js';

import PrivateRoute from './components/PrivateRoute.js';
import LoginRoute from './components/LoginRoute.js';
import { ChapterProvider } from './contexts/ChapterContext.js';
import GenericNotFound from './components/GenericNotFound.js';



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
