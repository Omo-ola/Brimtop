
function Hero() {
    return (
      <main className="bg-[url('/public/images/BgImage.jpg')] w-screen relative h-hero bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-200 opacity-50"></div>
        <article className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-[50%] w-screen px-7 md:px-0">
                <h1 className="text-3xl sm:text-5xl font-bold text-white leading-11">WELCOME TO  <br />BRIMTOP LIBRARY</h1>
                <p className=" text-base sm:text-xl py-5 font-semibold text-white">The ultimate restaurant  <br />for brain food</p>
                <button className="p-3 inline-block bg-blue-700 text-white border-2 border-white rounded-md">Get started</button>
        </article>
      </main>
    );
}

export default Hero