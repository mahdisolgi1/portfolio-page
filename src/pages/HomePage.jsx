import Footer from "../components/Footer";
import "./HomePage.css";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";

function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Skills />
        <Portfolio />
        <Testimonials />
      </main>
    </>
  );
}

export default HomePage;
