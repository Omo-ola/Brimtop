import { SwiperSlide } from "swiper/react";
import Heading from "../components/Heading";
import Swipers from "../components/Swipers";
const imUrl = "https://i.pravatar.cc/48?u=499476";
const arr = [1, 2, 3, 4, 5]

const users = [
  "Azzez Basit",
  "Tomiwa Edun",
  "Adeleke Damola",
  "Azzez Basit",
  "Tomiwa Edun",
];

function Testimonials() {
  return (
    <section className="testimonial bg-blue-600 my-10 h-[fit-content] py-10">
      <Heading center="true" color="white" size="true">
        <span className="text-5xl mr-1">&quot;</span> Testimonials
      </Heading>
      
      <Swipers center={true} perView={3}>
        {arr.map((card, i) => {
          return (
            <SwiperSlide key={i}>
              <article className="w-[18rem] bg-white m-auto rounded-lg text-center mt-2 text-stone-900 px-5 swiper-slide">
                <div className=" mb-6 w-[80px] h-[80px] m-auto pt-5">
                  <img
                    src={imUrl+i}
                    alt=""
                    className="w-[100%] rounded-[100%]"
                  />
                </div>
                <h1 className="font-bold text-lg ">{ users[i]}</h1>
                <p className="text-sm font-semibold">CEO XYZ company</p>
                <div className="">XXXXXX</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur eligendi provident magnam labore tempore libero, fuga
                  distinctio velit consequuntur cupiditate, incidunt quia
                  suscipit nam nemo eos similique rem esse odio?
                </p>
              </article>
            </SwiperSlide>
          );
        })}
      </Swipers>
    </section>
  );
}

export default Testimonials;
