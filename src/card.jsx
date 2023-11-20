/* eslint-disable react/prop-types */

export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            
            <img src= {props.img} alt = "katie" className="katie"/>
            <div className="cardstack">
                <img src= {props.img2} alt="star" className="star"/>
                <span> {props.rating}</span>
                <span className="grey">({props.reviewers}) . </span>
                <span className="grey">{props.country} </span>

            </div>
            <p> {props.title} </p>
            <p> From ${props.price} / person</p>

        </div>
    )
}