import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Banner image="assistir"></Banner>
      <Container>
        <h1>Hello world</h1>
        <p>Olá mundo</p>
      </Container>
      <Footer></Footer>
    </>

  );
}

export default App;
