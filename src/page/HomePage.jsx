import Footer from "../components/Footer";
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

      <Footer />
    </>
  );
}

export default HomePage;
