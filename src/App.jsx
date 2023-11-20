
// import star from "./assets/star.png"
import Nav from "./nav";
// import Content from "./content"
import Card from "./card";
// import katie from "./assets/katie-zaferes.png"
import data from "./data";
// import star from "./assets/star.png"
// "parser": "@babel/eslint-parser";

export default function App() {
  const cards = data.map((item) => {
    
    return(<Card
      Key = {item.id}
      img = {item.img}
      rating = {item.stats.rating}
      reviewCount = {item.stats.reviewCount}
      location = {item.location}
      title = {item.title}
      price = {item.price}
      openSpots = {item.openSpots}
    />
    
    );

  }
  
    
  )

  return (
    <div>
      <Nav/>
      <section className="cards-list">
        {cards}
      </section>

    </div>
  )
}