import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

function Home(){
  
  return(
    <Layout>
      <Card food="Pasta" imageUrl="https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_3607,h_3607,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg" title="pasta-food" grade="4.8" restaurant="Italian House" price="COP $50.000" review="The origin of Italian pasta is different from Asia. Historical research attributes the origin of pasta, in Italy, to the ancient Etruscan civilization (9th century BC), which made it by crushing or grinding various cereals and grains mixed with water, which they then cooked, resulting in a tasty and nutritious food." />
    </Layout>
  )
}

export default Home
