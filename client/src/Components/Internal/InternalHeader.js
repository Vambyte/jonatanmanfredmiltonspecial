import { Link, useNavigate } from 'react-router-dom';
//import '../../ComponentStyle/InternalHeader.css'
import { useAuth } from '../../contexts/AuthContext';

function InternalHeader() {

  const {logout} = useAuth();
  const navigate = useNavigate();
  require("../../ComponentStyle/InternalHeader.css");

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
              <li key={"Home"}><Link to="/home">Home</Link></li>
              <li key={"OurCourse"}><a href="https://www.youtube.com/watch?v=DVREpKIk5RQ" target="_blank">Our Course</a></li>
              <li key={"TheTeam"}><a href="https://www.youtube.com/watch?v=DVREpKIk5RQ" target="_blank">The team</a></li>
              <li key={"AboutUs"}><a href="https://www.youtube.com/watch?v=DVREpKIk5RQ" target="_blank">About us</a></li>
            </div>
            <div>
              <li key={"LogOut"}><button className="button-link" onClick={handleLogout}>Logout</button></li>
            </div>
          </ul>
        </nav>
    
    </ >
  );
}

export default InternalHeader;