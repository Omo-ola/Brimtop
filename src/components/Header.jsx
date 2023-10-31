import { useRef } from "react";
import { Link } from "react-router-dom";


export default function Header() {
  const list = useRef(null);




  function handleOpen() {
    list.current.classList.remove(`translate-x-[50rem]`)
}
  function handleClose() {
    list.current.classList.add(`translate-x-[50rem]`);
}




  return (
    <header className="flex items-center justify-between px-6 md:px-4 py-4 ">
      <div className="flex items-center justify-between gap-4">
        <div className="w-10 h-8 rounded-sm flex items-center ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            width="30px"
            viewBox="0 0 448 512"
            className="my-icon"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
        <div className="w-32">
          <img src="/public/images/Logo.jpg" alt="" className="w-screen" />
        </div>
      </div>

      <div className="fixed w-[60%] bg-white shadow-lg md:shadow-none top-0 right-0 z-20 px-8 h-screen md:flex justify-between gap-8 transition-all duration-100" ref={list}>
        <ul className="mt-20 md:mt-0 md:flex items-center justify-between gap-3 text-sm font-semibold">
          <li className="my-4">Home</li>
          <li className="my-4">All Books</li>
          <li className="my-4">My Books</li>
          <li className="my-4">Contact Us</li>
        </ul>
        <div className="md:flex items-center justify-between text-sm gap-3">
          <Link to='/login'
            href="#"
            className="block md:inline-block p-1 border border-blue-600 text-blue-600 rounded-sm mb-4 text-center"
          >
            Login
          </Link>
          <Link to='/signup'
            href="#"
            className="block md:inline-block  p-1.5 bg-blue-600 text-white rounded-md text-center"
          >
            Sign Up
          </Link>
        </div>
        <svg className="absolute top-3 right-7 md:hidden" onClick={handleClose} xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
      </div>




      {/* Menu for opening right side Bar */}
      <svg className="md:hidden" xmlns="http://www.w3.org/2000/svg" onClick={handleOpen} height="2em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
    </header>
  );
}
