import cart from "../../assets/icons/cart.png";
import profile from "../../assets/icons/userProfile.png";
import './Nav.css'

const Nav = () => {
  const navLinks = (
    <>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Events</a>
      </li>
      <li>
        <a href="#">About Us</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </>
  );

  return (
    <>
      <div className="container mx-auto">
        <div className="navbar bg-gradient-to-r from-[#591BFF] to-[#7b4affab] rounded-[20px] h-[72px] p-[22px] mt-3 px-[45px] relative">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white navUl"
              >
                {navLinks}
              </ul>
            </div>
            <div>
              <a href="/" className="font-sansRegular text-2xl text-white">
                Event<span className="font-bold">Host</span>
              </a>
              <svg
                width="20"
                height="92"
                className="absolute top-[-10px] left-[191px]"
                viewBox="0 0 20 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="white" />
                <circle cx="10" cy="82" r="10" fill="white" />
                <path d="M10 20V72" stroke="white" strokeDasharray="4 4" />
              </svg>
              <svg
                width="20"
                height="92"
                className="absolute top-[-10px] right-[191px]"
                viewBox="0 0 20 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="white" />
                <circle cx="10" cy="82" r="10" fill="white" />
                <path d="M10 20V72" stroke="white" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white font-sansRegular navUl">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end space-x-4">
            <img src={profile} alt="" />
            <img src={cart} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
