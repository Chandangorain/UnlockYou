import React from 'react'
import "../auth.form.scss"

const Login = () => {


  const handleSubmit = (e) => {
    e.preventDefault();  //without it after submit the page reloads, so to avoid that we use this tht doesn't allow to reload
  }
  return (
    <div>
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
        </div>

      </main>
    </div>
  )
}

export default Login        // export to app.routes.jsx and then to App.jsx to be used in the router.
    // Login.jsx->app.routes.jsx->App.jsx->main.jsx->index.html->output
