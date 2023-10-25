

export default function Header() {
  return (
    <header className="md:flex items-center justify-between px-6 py-4 ">
      <div className="md:flex items-center justify-between gap-8">
        <div className="w-10 h-8 rounded-sm flex items-center ml-5">
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" viewBox="0 0 448 512" className="my-icon"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </div>
        <div className="w-32">
          <img src="/public/images/Logo.jpg" alt="" className="w-screen" />
        </div>
      </div>
      <ul className="md:flex items-center justify-between gap-3 text-sm font-semibold">
        <li>Home</li>
        <li>All Books</li>
        <li>My Books</li>
        <li>Contact Us</li>
      </ul>
      <div className="flex items-center justify-between text-sm gap-3">
        <a href="#" className="p-1 border border-blue-600 text-blue-600 rounded-sm">
          Login
        </a>
        <a href="#" className="p-1.5 bg-blue-600 text-white rounded-md">Sign Up</a>
      </div>
    </header>
  );
}
