import React from 'react';
export const Navbar = ({ cartCount,handleSearch,onClickCart}) => {
  return (
    <>
       <nav className=" top-0 w-full bg-white shadow-lg p-6 flex sm:w-full">
          <div>
            <h6 className="lg:text-black lg:text-4xl lg:w-96 lg:ml-8 lg:p-2 md:text-xl  md:w-60 md:p-4 sm:text-md sm:text-xl sm:mt-4">Surya Electronics</h6>
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Search" 
              className="lg:p-5 lg:ml-1 lg:w-[600px] rounded-lg border border-black md:w-[350px] md:p-4 md:rounded-md sm:rounded-md p-3 ml-2 sm:w-[250px] sm:ml-5 sm:mt-2" 
              onChange={(e) => handleSearch(e.target.value)} 
            />
          </div>
          <div className="flex  lg:ml-32 md:ml-28 sm:ml-12">
            <a href="/Signin" class=" lg:mt-4 lg:mr-1 lg:text-lg md:mt-3 md:text-lg sm:text-custom sm:mt-5">Signin </a>
            <span className='mt-4 text-lg md:mt-3 sm:text-custom sm:mt-5'> /</span>
            <a href="/Signup" class=" lg:ml-1 mt-4 lg:text-lg md:mt-3 sm:text-custom sm:mt-5">Signup</a>
          </div>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
              className="w-10 ml-24 relative md:w-9 md:ml-12 sm:w-8 sm:ml-12 sm:mt-4"
              onClick={onClickCart}
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            <div style={{width: "1.2rem", height:"1.2rem", position:"absolute", transform : "translate(25%,25%)" ,right: 5,display: "flex", justifyContent: "center", alignItems: "center" }} className="bg-black rounded-3xl text-white  mr-20 text-center md:mr-16 sm:mr-12 sm:mt-1 sm:w-4">
                {cartCount}
            </div>
        </nav>
    </>
  )
};





