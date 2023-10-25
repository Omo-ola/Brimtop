
export default function Card() {
  return (
    <article className="w-[18rem] bg-white m-auto rounded-lg text-center mt-2 text-stone-900 px-5 swiper-slide">
      <div className=" mb-6 w-[80px] h-[80px] m-auto pt-5">
        <img
          src="/public/images/user-2.jpg"
          alt=""
          className="w-[100%] rounded-[100%]"
        />
      </div>
      <h1 className="font-bold text-lg ">Ismail Olaitan</h1>
      <p className="text-sm font-semibold">CEO XYZ company</p>
      <div className="">XXXXXX</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        eligendi provident magnam labore tempore libero, fuga distinctio velit
        consequuntur cupiditate, incidunt quia suscipit nam nemo eos similique
        rem esse odio?
      </p>
    </article>
  );
}
