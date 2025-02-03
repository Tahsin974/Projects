import { Link, useNavigate } from "react-router-dom";
import logo from "../../../images/Logo/logo2.png";
import useFoodContext from "../../../Context/useFoodContext";
import useCalculation from "../../../Hooks/useCalculation";
import useAuthContext from "../../../Context/useAuthContext";

const Navbar = () => {
  const { user,userSignOut,setUser } = useAuthContext();
  const { cart } = useFoodContext();
  const { subTotal, totalQuantity } = useCalculation();
  const navigate = useNavigate();
  const handleSignOut = () =>{
    userSignOut()
    .then(() => {
        setUser();
        navigate('/home')
      })
      .catch((error) => {
        console.log(error.message)
      });
  }
  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="navbar bg-slate-100	 text-black ">
      <div className="navbar-start">
        <Link to="/home" className="btn btn-ghost text-xl">
          <img className="lg:h-9 md:h-9 h-6" src={logo} alt="" />
        </Link>
      </div>
      <div className=" navbar-end ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {totalQuantity}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-white z-[1] mt-3  shadow min-w-32"
          >
            <div className="card-body">
              <span className="text-lg font-bold">{totalQuantity} Items</span>
              <span className="text-info">
                Subtotal: ${subTotal.toFixed(2)}
              </span>
              <div className="card-actions">
                {cart.length ? (
                  <Link to="/cart">
                    <button className="btn btn-error text-white btn-block">
                      View cart
                    </button>
                  </Link>
                ) : (
                  <button className="btn" disabled="disabled">
                    View cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          
            {user ? 
            <>
            <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3   p-2 shadow"
          >
            <li>
                <button onClick={handleSignOut} className="btn btn-sm btn-error text-white">
                  LogOut
                </button>
              </li>
          </ul>
            
            </>
              
             : 
              <>
              <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 min-w-32  p-2 shadow"
          >
            <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <button
                    onClick={handleSignUp}
                    className="btn btn-sm btn-error text-white"
                  >
                    Sign Up
                  </button>
                </li>


          </ul>
                
              </>
            }
          
        </div>

        
          {user ? 
          <>
          <ul className="menu menu-horizontal px-1 flex items-center invisible lg:visible">
          <li>
              <button onClick={handleSignOut} className="btn btn-sm btn-error text-white">
                LogOut
              </button>
            </li>
          </ul>
          
          </>
            
           : 
            <>
            <ul className="menu menu-horizontal px-1 flex items-center invisible lg:visible">
            <li>
                <Link to="/login">Login</Link>
              </li>
            
              <li>
                <button
                  onClick={handleSignUp}
                  className="btn btn-sm btn-error text-white"
                >
                  Sign Up
                </button>
              </li>
            </ul>
              
            </>
          }
      </div>
    </div>
  );
};

export default Navbar;
