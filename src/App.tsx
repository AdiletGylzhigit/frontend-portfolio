import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="relative bg-gradient-to-tr from-[#536976] to-[#292E49] ">
      <Header />
      <section><Hero /></section>
      <section><Skills /></section>
      <section><Projects /></section>
      <section><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
