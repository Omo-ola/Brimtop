import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [clicked,setClicked] = useState("false")

  return (
    <section className="md:flex gap-0 w-screen h-screen">
      <div className="hidden md:block w-[40%] h-screen mr-5 relative">
        <img
          src="/images/BgImage.jpg"
          className="w-[100%] h-[100%] object-cover"
          alt=""
        />
        <div className="absolute bg-stone-500 opacity-[50%] inset-0"></div>
      </div>

      <div className="w-[90%] mx-auto md:w-[60%] h-screen md:relative md:pr-20">
        <img src="/images/Logo.jpg" alt="" className="absolute right-4 top-4" />
        <div className="pt-[6rem] md:pt-[3rem]">
          <h1 className="text-3xl font-bold mb-2">Sign In</h1>
          <p className="text-sm font-semibold mb-4 text-stone-900">
            Fill in the required details to sign in
          </p>
          <div className="mb-5">
            <label htmlFor="" className="block mb-2 text-sm font-medium ">
              Fullname
            </label>
            <input
              type="text"
              placeholder="Fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="block p-2 border-2  border-stone-600 focus:outline-none focus:border-blue-500 w-[100%] rounded-lg"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="" className="block mb-2 text-sm font-medium ">
              Email Address
            </label>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block p-2 border-2  border-stone-600 focus:outline-none focus:border-blue-500 w-[100%] rounded-lg"
            />
          </div>
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
            <div className="">
              <span>
                <input type="checkbox" value={clicked} onChange={(e)=>setClicked(e.target.checked)} name="" id="" /> By clicking register,You agree to our <Link>Terms</Link> and <Link>Policies</Link>
              </span>
            </div>
            <button className="bg-blue-600 p-2 w-[100%] my-2 rounded-md text-white">
              Log In
            </button>
            <p className="text-center text-stone-800 font-bold">
             Already have an account?
              <Link className="text-blue-600 font-medium" to="/login">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
