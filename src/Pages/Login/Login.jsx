import { use, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../../Components/Loader/Loader";

const Login = () => {
  const [eye, setEye] = useState(false);
  const { signInUser, signInWithGoogle, loading, setLoading} = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  
  // const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((res) => {
        console.log(res);
        toast.success("Successful Logged In");
        
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleGoogleLogin = () => {
    setLoading(true);
    signInWithGoogle()
      .then((res) => {
        toast.success("Successfully Login");
        
        navigate(from, { replace: true });
         
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleEye = () => {
    setEye(!eye);
  };
  if (loading) {
    return <Loader></Loader>;
  } else {
    return (
      <div className="flex  justify-center">
        <form onSubmit={handleLogin}>
          <div className="card-body w-full">
            <fieldset className="fieldset">
              <label className=" text-lg font-semibold">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
              />
              <label className="text-lg font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="text-lg font-semibold">Password</label>
              <div className="relative">
                <input
                  type={eye ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={handleEye}
                  className="absolute top-3 right-4"
                >
                  {eye ? <IoMdEyeOff></IoMdEyeOff> : <IoMdEye></IoMdEye>}
                </button>
              </div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <button
                onClick={handleGoogleLogin}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>

              <h2 className="text-lg font-semibold">
                Already Have an Account{" "}
                <NavLink to="/register">Register</NavLink>{" "}
              </h2>
            </fieldset>
          </div>
        </form>
        <ToastContainer></ToastContainer>
      </div>
    );
  }
};

export default Login;
