import katie from "./assets/katie-zaferes.png"
import star from "./assets/star.png"


export default function Card(){
    return(
        <div className="card">
            <img src= {katie} alt = "katie" className="katie"/>
            <div className="cardstack">
                <img src={star} alt="star" className="star"/>
                <span> 5.0</span>
                <span className="grey">(6) . </span>
                <span className="grey">USA </span>

            </div>
            <p> Life lessons with Katie Zaferes </p>
            <p> From $136 / person</p>

        </div>
    )
}