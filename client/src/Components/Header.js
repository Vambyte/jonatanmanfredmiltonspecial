import { useNavigate } from 'react-router-dom';
import '../ComponentStyle/header.css'
import { useAuth } from '../contexts/AuthContext';

function Header() {

  const {logout} = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {

    try {
      await logout();
      navigate("/login");
    } catch(e){

      alert(e);
    }
  }

  return (
    <>
        <nav>
          <ul>
            <div>
              <li key={"Home"}><a href="google.se" target="_blank">Home</a></li>
              <li key={"OurCourse"}><a href="google.se" target="_blank">Our Course</a></li>
              <li key={"TheTeam"}><a href="google.se" target="_blank">The team</a></li>
              <li key={"AboutUs"}><a href="google.se" target="_blank">About us</a></li>
            </div>
            <div>
              <li key={"LogOut"}><button className="button-link" onClick={handleLogout}>Logout</button></li>
            </div>
          </ul>
        </nav>
    
    </ >
  );
}

export default Header;