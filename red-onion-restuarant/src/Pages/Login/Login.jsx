import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../Context/useAuthContext";

const Login = () => {
    const {setEmail,setPassword,signInWithEmailPassword,setUser} = useAuthContext();
    const navigate = useNavigate();
    const location = useLocation();
    console.log('from log',location)
    const handleLoginForm = e =>{
        e.preventDefault(); 
        setEmail(e.target.email.value ); 
        setPassword(e.target.password.value);
    
       
        signInWithEmailPassword()
        .then((result) => {
            // Signed in 
            console.log(result.user)
            setUser(result.user);
            navigate(location.state ? location.state : '/home')
        
            // ...
          })
          .catch((error) => {
            console.log(error.message);
          });
       
        e.target.reset();
       
      }
  return (
    <div className="my-6 flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
      <h4 className="text-3xl font-bold text-center py-3">Please Login</h4>
        <form onSubmit={handleLoginForm} className="card-body">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              name="email"
              type="email"
              className="grow"
              placeholder="Email"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              name="password"
              type="password"
              className="grow"
              placeholder="password"
              required
            />
          </label>
          <label className="label">
            <Link to="/register" className="label-text-alt link link-hover">
              Not registered?
            </Link>
          </label>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
             Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
