
import Heading from "../components/Heading";
import { useBooks } from "../../contexts/BooksContext";
import { useState } from "react";

function Trending() {
  const { trending } = useBooks();

  const [currentTrendingIndex, setCurrentTrendingIndex] = useState(0);
  

const nextTrending = () => {
  setCurrentTrendingIndex((prevIndex) =>
    prevIndex === trending.length - 1 ? 0 : prevIndex + 1
  );
};

const previousTrending = () => {
  setCurrentTrendingIndex((prevIndex) =>
    prevIndex === 0 ? trending.length - 1 : prevIndex - 1
  );
};

 

  return (
    <section className="w-[90%] mx-auto my-4 mt-10">
      <Heading center="true" color="stone-800" size="true">
        Trending Books
      </Heading>
      <main className="trending m-auto">
        <div className="slider-container relative overflow-hidden">
          <div className="slider grid grid-cols-2 gap-2">
            {trending.map((trendingBook, index) => (
              <div
                key={index}
                className={`slide bg-green-600 translateX(-${
                  currentTrendingIndex * 100
                }%)`}
              >
                <article key={index} className={``}>
                  <img
                    src={trendingBook.imageUrl}
                    alt={trendingBook.name}
                    className=" object-cover"
                  />
                  <div>
                    <h1 className="text-lg font-bold text-black">
                      {trendingBook.name}
                    </h1>
                    <h3 className="text-blue-600 font-semibold mb-2">
                      {trendingBook.author}
                    </h3>
                    <p>XXXXXX</p>
                    <button className="inline-block mt-2 py-1 px-4 bg-blue-700 rounded-md text-white font-light">
                      Bookmark
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="mt-2">
            <button
              onClick={previousTrending}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Previous
            </button>
            <button
              onClick={nextTrending}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Trending;



 