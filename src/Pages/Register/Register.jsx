import { use, useContext, useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import {  NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";




const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [show, setShow] = useState(false);
  const {createUser, updateUser} = useContext(AuthContext)

  const navigate = useNavigate();
  const handlePassword = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccess("");
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setErrorMessage("Password must contain at least one lowercase letter");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setErrorMessage("A Special Carecter Needs");
      return;
    }
    createUser(email, password)
    .then(async(result) =>{
        await updateUser(name, photoURL)
        setSuccess("Successfully registered ");
        navigate('/')
        toast.success("Register Done")
        console.log(result);
    })
    .catch((error) => {
        setErrorMessage(error.message);
      });

    //     createUser(email, password)
    //     .then (async (result) =>{
    //       await updateUser(name, photoURL)
    //       // console.log(result.user);
    //       setSuccess("Successfully registered ");
    //         navigate('/')
    //     })

    //       .catch((error) => {
    //         setErrorMessage(error.message);
    //       });
  };
  return (
    <div className="flex justify-center items-center my-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 pt-10 shadow-2xl">
        <h1 className="text-2xl font-semibold text-center">
          Register Your Account
        </h1>
        <div className="card-body">
          <div className="divider"></div>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label text-lg font-semibold text-black">
                Your Name
              </label>
              <input
                type="text"
                className="input w-full bg-base-200 border-none text-xs font-semibold"
                placeholder="Enter Your Name"
                name="name"
              />
              <label className="label text-lg font-semibold text-black">
                Photo URL
              </label>
              <input
                type="text"
                className="input w-full bg-base-200 border-none text-xs font-semibold"
                placeholder="Enter Your Photo URL"
                name="photo"
              />
              <label className="label text-lg font-semibold text-black">
                Email
              </label>
              <input
                type="email"
                className="input w-full bg-base-200 border-none text-xs font-semibold"
                placeholder="Enter Your email"
                name="email"
              />
              <label className="label text-lg font-semibold text-black">
                Password
              </label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  className="input w-full bg-base-200 border-none text-xs font-semibold"
                  placeholder="Enter Your Password"
                  name="password"
                />
                <button
                  onClick={handlePassword}
                  className=" absolute right-6 text-xl top-3 cursor-pointer"
                >
                  {" "}
                  {show ? <IoMdEyeOff></IoMdEyeOff> : <IoEye></IoEye>}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <input
                  onChange={(e) => setAccepted(e.target.checked)}
                  type="checkbox"
                  className="checkbox font-semibold"
                />
                <h2>Accept Terms and Condition</h2>
              </div>
              <p className="text-l text-red-500 font-semibold">
                {errorMessage}
              </p>
              <p className="text-l text-green-500 font-semibold">{success}</p>
              <button
                disabled={!accepted}
                className={`btn btn-neutral mt-4 ${!accepted ? "opacity-95" : ""}`}
              >
                Register
              </button>
              <div>
                <h2 className="text-text-lg font-semibold text-center mt-4">
                  Already Have An Account ?{" "}
                  <NavLink
                    className="text-l text-red-500 font-semibold"
                    to="../login"
                  >
                    {" "}
                    Login
                  </NavLink>
                </h2>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
