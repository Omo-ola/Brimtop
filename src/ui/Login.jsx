import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
    const [clicked, setClicked] = useState("false");

  return (
    <section className="md:flex gap-0 w-screen h-screen">
      <div className="hidden md:block w-[40%] h-screen mr-5 relative">
        <img
          src="/images/BgImage.jpg"
          className="w-[100%] h-[100%] object-cover"
          alt=""
        />
        <div className="absolute bg-blue-500 opacity-[50%] inset-0"></div>
      </div>

      <div className="w-[90%] mx-auto md:w-[60%] h-screen md:relative md:pr-20">
        <img src="/images/Logo.jpg" alt="" className="absolute right-4 top-4" />
        <div className="pt-[6rem] md:pt-[10rem]">
          <h1 className="text-3xl font-bold mb-2">Sign In</h1>
          <p className="text-sm font-semibold mb-4 text-stone-900">
            Fill in the required details to sign in
          </p>
          <div className="mb-5">
            <label htmlFor="" className="block mb-2 text-sm font-medium ">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="block p-2 border-2  border-stone-600 focus:outline-none focus:border-blue-500 w-[100%] rounded-lg"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="" className="block mb-2 text-sm font-medium ">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block p-2 border-2 border-stone-600 focus:outline-none focus:border-blue-500 w-[100%] rounded-lg"
            />
          </div>
          <div>
            <div className="flex justify-between items-center flex-wrap mb-4">
              <span>
                <input type="checkbox" value={clicked} onChange={e=>setClicked(e.target.checked)} name="" id="" /> Remember me
              </span>
              <Link to="" className="hover:text-blue-600">Forgot Password?</Link>
            </div>
            <button className="bg-blue-600 p-2 w-[100%] my-2 rounded-md text-white">
              Log In
            </button>
            <p className="text-center text-stone-800 font-bold">
              Don't have an account yet?{" "}
              <Link className="text-blue-600 font-medium" to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
