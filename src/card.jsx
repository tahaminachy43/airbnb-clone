
import star from "./assets/star.png"
export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            
            <img src= {`../src/assets/${this.props.img}`} alt = "katie" className="katie"/>
            <div className="cardstack">
                <img src= {star} alt="star" className="star"/>
                <span> {this.props.rating}</span>
                <span className="grey">({this.props.reviewCount}) . </span>
                <span className="grey">{this.props.location} </span>

            </div>
            <p> {this.props.title} </p>
            <p> From ${this.props.price} / person</p>

        </div>
    )
}