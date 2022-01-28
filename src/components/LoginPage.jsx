import React from 'react'
import "./loginpage.css"
export default function LoginPage() {
  
  return (
    <>
    <div className="bodylogin">
      <div className="row">
  <div className="column">
       <div className="logopart">
        <img src="" className="logosize"/>
      </div>
  </div>
  <div className="column">
    <form className="loginform" action="http://localhost:3000/books">
            <div className="headings">
                <h1 className="headlog">Login</h1>
            </div>
            <div className="inputDiv">
                <input type="text" name="name" id="name" placeholder="Username" autocomplete="off"/>
            </div>
                
            <div className="passwordDiv">
                <input type="password" id="password" placeholder="Password"/>
            </div>
                
            <div className="btn">
                <button type="submit">Login</button>
            </div>
        </form>
  </div>
</div> 
</div>
    </>
  )
}
