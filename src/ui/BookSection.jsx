import ReactPaginate from "react-paginate";

import { useBooks } from "../../contexts/BooksContext";
import Heading from "../components/Heading";
import { useState } from "react";

function BookSection() {
  const { books, isLoading, dispatch, showingBook } = useBooks();

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  let active = "";
  let clicked = false;

  const startIndex = currentPage * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;
  let pageBooks = (showingBook ? showingBook : books).slice(
    startIndex,
    endIndex
  );

  const category = [
    ...new Set(
      books.map((book) => {
        return book.category;
      })
    ),
  ];
  category.unshift("All");

  function handleFilter(e) {
    const element = e.target.parentElement.querySelectorAll("li");
    element.forEach((elem) => {
      elem.classList.remove("bg-blue-700");
      elem.classList.remove("text-white");
    });
     e.target.classList.add("bg-blue-700");
    e.target.classList.add("text-white");
    

    const filtered = e.target.innerText;
    if (filtered === "All") {
      return dispatch({ type: "book/filtered", payload: null });
    }
    const filteredCat = books.filter((category) => {
      return category.category === filtered;
    });
    dispatch({ type: "book/filtered", payload: filteredCat });
  }

  return (
    <section className="mb-4">
      <Heading center="true" color="stone-800" size="true">
        Category Of Books
      </Heading>

      <ul className="flex gap-x-14 gap-y-4 justify-center flex-wrap w-[80%] m-auto">
        {category.map((cat) => {
          return (
            <li
              onClick={handleFilter}
              key={cat}
              className={`p-2 border-2 border-blue-700 rounded cursor-pointer text-blue-700 font-bold ${
                active === clicked ? "bg-blue-800" : "logo"
              }`}
            >
              {cat}
            </li>
          );
        })}
      </ul>
      <div className="w-[90%] md:w-[40rem] m-auto my-4 relative">
        <svg
          className="absolute top-[50%] translate-y-[-50%] left-4 w-[1.5rem] h-[1.5rem] cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <style>svg</style>
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
        <input
          type="text"
          placeholder="Search for a book"
          className="w-[100%] p-3 pl-[4rem] border-2 border-stone-600 text-stone-600 rounded focus:outline-stone-700"
        />
      </div>

      <div>
        <div
          className="flex sm:justify-between justify-center items-center gap-5 flex-wrap mb-6 w-[100%] px-3 sm:w-[90%] mx-auto"
          id="books"
        >
          {!isLoading &&
            (showingBook ? showingBook : pageBooks).map((book, i) => (
              <article
                key={i}
                className="relative w-[13rem] bg-white shadow-2xl px-6 pt-3 h-[18rem] flex flex-col pb-3"
              >
                <svg
                  className="absolute top-1 right-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#0147c1"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <style>svg</style>
                  <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
                </svg>
                <img src={book.imageUrl} className="h-[90%]" alt="" />
                <div className="flex justify-center gap-2 mt-2">
                  <button className="bg-blue-700 px-4 py-1 font-semibold text-sm text-white">
                    See more &rarr;
                  </button>
                  <img src="/public/images/iconography.png" alt="" />
                </div>
              </article>
            ))}
        </div>

        <ReactPaginate
          previousLabel={""}
          nextLabel={""}
          breakLabel="..."
          breakClassName="break-me"
          pageCount={Math.ceil(
            (showingBook ? showingBook : books).length / itemsPerPage
          )}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName="pagination flex flex-wrap justify-center gap-4 item-center w-[fit-content] md:w-[50%] m-auto"
          subContainerClassName="pages pagination inline-block text-sm"
          activeClassName="active bg-blue-700"
          previousClassName="invisible" // Hide the "Previous" button
          nextClassName="invisible"
        />
      </div>
    </section>
  );
}

export default BookSection;
