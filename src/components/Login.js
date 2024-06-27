import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
const Login = (props) => {
    const[credentials,setCredentials] = useState({email:"",password:""});
    let history = useNavigate();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const response = await fetch("https://notelify-backend.onrender.com/api/auth/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body : JSON.stringify({email:credentials.email,password: credentials.password})
          });
          const json = await response.json();
          console.log(json);
          console.log(json.success); 
          if(json.success){
            localStorage.setItem('token',json.authtoken)
            history("/");
            props.showAlert("Login Successfull","success")
            
          }
          else{
            props.showAlert("Invalid Credentials","danger")
          }
    }
    const onChange = (e) =>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
      }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='p-5 rounded shadow' style={{ backgroundColor: '#ffffff', maxWidth: '400px', width: '100%' }}>
        <h3 className='text-center mb-4' style={{ color: '#007bff' }}>Login To Continue</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name='password'/>
          </div>
          <button type="submit" className="btn btn-primary w-100">LogIn</button>
        </form>
      </div>
    </div>
  )
}

export default Login
