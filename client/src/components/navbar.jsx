import React from "react";
import { Link } from "react-router-dom";
export const Navbar = ({ cartCount, handleSearch, onClickCart }) => {
  return (
    <div>
      <nav className=" font-family-EB-Garamond top-0 w-full bg-white p-4 flex border-b-2 border-grey-200">
        <div className="flex justify-between">
          <div>
            <h6 className="text-black text-4xl w-96 p-2">
              <Link to="/">SuryaElectronics</Link>
            </h6>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="bg-white-200 p-3 px-6  mt-2 w-[650px] rounded-full border-gray-200 border"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className="flex ml-10 items-center">
            <Link
              to="/Signin"
              class=" lg:mt-3 lg:mr-2 lg:text-lg md:mt-7  md:mr-2  sm:text-md sm:mt-5 sm:mr-1 "
            >
              Sign-in{" "}
            </Link>
          </div>
          <div className="flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                className="w-10 lg:ml-20 lg:mt-3 relative md:w-9 md:ml-20 md:mt-2 sm:w-9 sm:ml-16 sm:mt-3"
                onClick={onClickCart}
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>
            </div>
            <div className="bg-black rounded-3xl w-6 h-6 text-white ">
              <p className="text-center">{cartCount}</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
