
import Nav from "./nav";
import Card from "./card";
import data from "./data";
import Content from "./content";

export default function App() {
  const cards = data.map((item) => {
    
    return(<Card
      Key = {item.id}
      item = {item}
      
    /> 
    );
  })

  return (
    <div>
      <Nav/>
      <Content/>
      <section className="cards-list">
        {cards}
      </section>

    </div>
  )
}