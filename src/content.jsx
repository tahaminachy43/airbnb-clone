import image from "./assets/photo-grid.png"

export default function Content(){
    return(
        <div className="content">
            <img src={image} alt="image" className="image"/>
            <h2 className="hero--header">Online Experiances</h2>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}