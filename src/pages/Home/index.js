import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Category, { categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header></Header>
      <Banner image="home"></Banner>
      <Container>
        {
          categories.map((category,index) => 
            <Category category={category}>
              { filterCategory(index).map((video) => <Card id={video.id} key={video.id}/>)}
            </Category>)
        }
      </Container>
      <Footer></Footer>
    </>

  );
}

export default Home;