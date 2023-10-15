import { useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Category, { categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";

function Home() {
  const [nome, setNome] = useState()

  return (
    <>
      <Header></Header>
      <Banner image="home"></Banner>
      <Container>
        {
          categories.map((category,index) => 
            <Category category={category}>
              <Carousel>  
                { filterCategory(index).map((video) => <Card id={video.id} key={video.id}/>)}
              </Carousel>
            </Category>)
        }
      </Container>
      <Footer></Footer>
    </>

  );
}

export default Home;
