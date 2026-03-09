import React from 'react'
import "../auth.form.scss"
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
 const navigate = useNavigate();    //a function that allows you to change routes (pages) using JavaScript instead of clicking a link.

  const handleSubmit = (e) => {
    e.preventDefault();  //without it after submit the page reloads, so to avoid that we use this tht doesn't allow to reload
  }
  return (
    
     <main>
        <div className="form-container">
          <h1>Login  </h1>  

            <form onSubmit={handleSubmit}>
          
            <div className='input-group'>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder='Enter your email' />

            </div>
            <div className='input-group'>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder='Enter your password' />
            </div>
            <button className="button primary-button">Login</button>
             </form>

              <p>
                Don't have an account? <Link to="/register">Register</Link>   {/* Link is used to redirect to register page */}
               </p>
        </div>

      </main>
    
  )
}

export default Login        // export to app.routes.jsx and then to App.jsx to be used in the router.
    // Login.jsx->app.routes.jsx->App.jsx->main.jsx->index.html->output
