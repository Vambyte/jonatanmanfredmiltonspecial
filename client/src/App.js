import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chapter from './Components/Chapter.js'
import HomePage from './Components/HomePage.js'
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';
import { AuthProvider } from './contexts/AuthContext.js';

import PrivateRoute from './Components/PrivateRoute.js';
import LoginRoute from './Components/LoginRoute.js';
import { ChapterProvider } from './contexts/ChapterContext.js';
import GenericNotFound from './Components/GenericNotFound.js';



function App() {
  return (
    <Router>
    <AuthProvider>
      <ChapterProvider>
        <Routes>
          <Route exact path="/chapter" element={<PrivateRoute/>}>
            <Route exact path="/chapter" element={<Chapter/>}/>
          </Route>
          <Route exact path="/home" element={<PrivateRoute/>}>
            <Route exact path="/home" element={<HomePage/>}/>
          </Route>
          <Route path="/signup" element={<LoginRoute/>}>
            <Route path="/signup" element={<Signup/>}/>
          </Route>
          <Route path="/login" element={<LoginRoute/>}>
            <Route path="/login" element={<Login/>}/>
          </Route>
          <Route path="*" exact element={<GenericNotFound/>}/>
        </Routes>
      </ChapterProvider>
    </AuthProvider>
    </Router>
  );
}

export default App;
