import React, { useState } from "react";


const SignUp = () => {
    const [username,setUsername] = useState('');
    const [mobile,setMobile] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [signedUp, setSignedUp] = useState(false);

    const handleSubmit = async (e) =>{
      e.preventDefault();
      try{
        const response = await fetch('http://localhost:3000/Signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username,mobile,email, password })
        });
        if (!response.ok) {
          throw new Error('Failed to sign in');
        }
    
        const data = await response.json();
        console.log('Signin response:', data);
        setSignedUp(true);
        if(setSignedUp){
          alert("Data saved, Login to continue shopping");
        }
       
        
        window.location.href = '/Signin'; 

  
      } catch (error) {
        console.log(error);
      }
      };
      
     
     
    
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div className="text-3xl text-center mb-6">
          <h1 className="text-4xl text-center mb-6">SuryaElectronics</h1>
        </div>
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Create Account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                 Username
              </label>
              <input
                type="text"
                id="name"
                name="username"
                value={username}
                required
                className="w-full py-2 px-4 border rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
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
                htmlFor="mobileNumber"
                className="block text-gray-700 font-semibold mb-2"
              >
                Mobile number
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">IN +91 </span>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobile"
                  value={mobile}
                  required
                  className="w-full py-2 px-4 border rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
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
                className="w-full py-2 px-4 border rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button 
          className="w-full py-2 px-4 border rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Create Your SuryaElectronics Account
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-500">
              Already have an account?{" "}
              <a href="/Signin" className="text-blue-500">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  };

export default SignUp;