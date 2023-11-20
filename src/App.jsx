
import Nav from "./nav";
import Card from "./card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    
    return(<Card
      Key = {item.id}
      
      {...item}
    /> 
    );
  })

  return (
    <div>
      <Nav/>
      <section className="cards-list">
        {cards}
      </section>

    </div>
  )
}