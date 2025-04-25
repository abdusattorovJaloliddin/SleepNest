import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import Divan from "./Assets/App.png";
import Section from "./Components/Section/Section";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  let data = [
    {
      images: Divan,
      title: "Kvadratchalar",
    },
    {
      images: Divan,
      title: "Ikat",
    },
    {
      images: Divan,
      title: "Davralar",
    },
    {
      images: Divan,
      title: "Geometrik kok",
    },
    {
      images: Divan,
      title: "Tropik barglar",
    },
    {
      images: Divan,
      title: "Bambi",
    },
    {
      images: Divan,
      title: "Vizantiya",
    },
    {
      images: Divan,
      title: "Kechki bog",
    },
    {
      images: Divan,
      title: "Pat Markiz",
    },
    {
      images: Divan,
      title: "Lavanda a",
    },
  ];

  return (
    <>
      <Header />
      <Hero />
      <Main data={data} />
      <Section />
      <Footer />
    </>
  );
}

export default App;
