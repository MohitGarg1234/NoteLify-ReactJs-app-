import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

const Navbar = (props) => {
  let location = useLocation();
  let history = useNavigate();

  // useEffect(()=>{
    //   console.log(location.pathname);
    // },[location])
    const handleLogout =()=>{
      localStorage.removeItem('token');
      history("/login");
    }
    const Login = location.pathname ==='/login';
    const Signup = location.pathname ==='/signup';
  return (
    
  <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">NoteLify</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className={`nav-link ${location.pathname==='/'?"active":""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className={`nav-link ${location.pathname==='/About'?"active":""}`} to="/About">About</Link>
            </li>    
        </ul>
        </div>
    </div>
    {/* {(localStorage.getItem('token')) && <p className='text-primary mx-3'>NAME</p> } */}
    
    {!localStorage.getItem('token')?<form className='d-flex'>
      {!Login && <Link className="btn btn-primary mx-2" to="/login" role='button'>LogIn</Link>}
      {!Signup && <Link className="btn btn-primary mx-2" to="/signup" role='button'>SignUp</Link>}
      </form>:<button onClick={handleLogout} className="btn btn-primary mx-2"> Logout </button>}
</nav>
  )
}

export default Navbar
