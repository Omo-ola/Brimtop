import Heading from "../components/Heading";


function AboutUs() {
    return (
      <section className="w-screen px-12 pt-4">
        {/* The color should be Tailwind Css value excluding the text-*/}
        <Heading center="false" color="blue-700">
          About Us
        </Heading>
        <div className="flex justify-between flex-wrap">
          <div className="w-[100%] mb-5 md:w-[40%] text-[1rem] font-medium mt-4 text-stone-800">
            <p className="mb-5 ">
              Brimtop library is one of the biggest private libraries in
              Nigeria.
              <br />
              The liberary began its operation in 2002.Currently, we have about
              24 branches all over the country
            </p>
            <p>
              Our library have a range of local and international books. We also
              have books for all ranges
            </p>
          </div>
          <div className="pt-4 m-auto md:w-[40%]">
            <img
              src="/public/images/about-us.png"
              alt=""
              className="w-[100%] mt-[-1rem]"
            />
          </div>
        </div>
      </section>
    );
}

export default AboutUs