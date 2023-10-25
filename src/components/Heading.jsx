function Heading({ children, color, center, size }) {

  return (
    <div
      className={`relative ${size ? "w-[20rem]" : ""} ${
        center === "true" ? "m-auto" : ""
      } mb-10 text-${color}`}
    >
      <h1
        className={`after:w-12 after:h-1 after:left-0 after:absolute after:bg-${color} after:bottom-[-5px] after:rounded-lg text-lg font-semibold flex`}
      >
        {children}
      </h1>
    </div>
  );
}

export default Heading;
