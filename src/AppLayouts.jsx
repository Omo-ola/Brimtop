import { BooksProvider } from "../contexts/BooksContext";
import Header from "./components/Header";
import AboutUs from "./ui/AboutUs";
import BookSection from "./ui/BookSection";
import Hero from "./ui/Hero";
import Testimonials from "./ui/Testimonials";


export default function AppLayouts() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Testimonials />
      <BooksProvider>
        <BookSection />
      </BooksProvider>
    </>
  );
}
