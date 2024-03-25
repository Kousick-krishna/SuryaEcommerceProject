import React, { useState } from "react";


const Signin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3000/Signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
    
        if (!response.ok) {
          throw new Error('Failed to sign in');
        }
    
        const data = await response.json();
        console.log('Signin response:', data);
        setLoggedIn(true); 
        if(setLoggedIn){
          alert('Successful login');
        }
       
        window.location.href = '/';
        
      } catch (error) {
        setError(error.message);
        alert(error.message);
      }
    }
    if (loggedIn) {
      return <Redirect to="/" />;
  }
    
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div className="text-3xl  text-center mb-6">
          <h1 className="text-4xl  text-center mb-6">SuryaElectronics</h1>
        </div>
        <div className="bg-white  rounded-lg p-8 border-2 border-gray-300">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 px-4 border rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                required
                onChange={(e)=> setPassword(e.target.value)}
                className="w-full py-2 px-4 border rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="text-center">
              <button className="w-full py-2 px-4 border rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" >
                Sign In
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-500">
              Don't have an account?{" "}
              <a href="/Signup" className="text-blue-500">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;