
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
    console.log(item);
    return(<Card
    Key = {item.id}
    img = {item.coverImg}
    rating = {item.stats.rating}
    reviewers = {item.stats.reviewCount}
    country = {item.location}
    title = {item.location}
    price = {item.price}
    />
    
    );

  }
  
    
  )

  return (
    <div>
      <Nav/>
      {cards}

    </div>
  )
}