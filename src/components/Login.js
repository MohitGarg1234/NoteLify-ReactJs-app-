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
            props.showAlert("Login Successful","success")
            
          }
          else{
            props.showAlert("Invalid Credentials","danger")
          }
    }
    const onChange = (e) =>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
      }
  return (
    <div className='mt-3'>
      <h2 className='text-center my-2'>Login To Continue To Your Notes - iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name='password'/>
        </div>
        <button type="submit" className="btn btn-primary">LogIn</button>
      </form>
    </div>
  )
}

export default Login
