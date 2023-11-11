import image from "./assets/photo-grid.png"

export default function Content(){
    return(
        <div className="content">
            <img src={image} alt="image" className="image"/>
            <h2>Online Experiances</h2>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}