import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';

const SignUp = (props) => {
  const[credentials,setCredentials] = useState({name:"" ,email:"",password:"",cpassword:""});
    let history = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (credentials.password === credentials.cpassword) {
        const response = await fetch("https://notelify-backend.onrender.com/api/auth/createuser", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
          localStorage.setItem('token', json.authtoken)
          props.showAlert("Account Created Successfully", "success")
          history("/");
        }
        else {
          props.showAlert("Email Already exists !!! Try with Signing up", "danger")
        }
  
      }
      else {
        props.showAlert("Confirm Password does not match", "danger")
      }
    }
  const onChange = (e) =>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
    <div className='p-5 rounded shadow-lg m-lg-n5' style={{ backgroundColor: '#ffffff', maxWidth: '400px', width: '100%' }}>
      <h2 className='text-center mb-4' style={{ color: '#007bff'}}>SignUp - Create new Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" name="name" onChange={onChange} className="form-control" required minLength={3}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" onChange={onChange} id="email" name="email" aria-describedby="emailHelp" required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" onChange={onChange} name="password" className="form-control" required minLength={5}/>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" id="cpassword" onChange={onChange} name="cpassword" className="form-control" required minLength={5}/>
        </div>
        <button type="submit" className="btn btn-primary w-100">SignUp</button>
      </form>
    </div>
  </div>
  )
}

export default SignUp
