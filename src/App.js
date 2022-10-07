import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
function App() {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = (e) =>{
    e.preventDefault();
    // alert("login")
    const data = {
      email:email,
      pass:pass
    }
    console.log(data);
    axios.post('http://localhost:5000/login',data).then((response)=>{
      response.data.log ? alert("Logged In", console.log("LI")) : alert("Wrong Credentials",console.log("WC")) 
      // response ? console.log("Logged In") : console.log("Wrong Credentials");
    }).catch((err)=>{
        console.log(err);
      })
  }

  return (
    <div className='container'>
      <h1>Hi There 👋 <br />
      Login Page</h1>
      <form className='w-75 mt-5 shadow-lg p-3 mb-5 bg-white rounded' onSubmit={(e)=>
      {login(e)}} >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setPass(e.target.value)}}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default App;
