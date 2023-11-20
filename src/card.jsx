
import star from "./assets/star.png"
import PropTypes from 'prop-types';


function Card(props){
    let badgeText;
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className ="card--badge" > {badgeText}</div>}
            
            <img src= {props.img} alt = "katie" className="card--image"/>
            <div className="card--stats">
                <img src= {star} alt="star" className="card--star"/>
                <span> {props.rating}</span>
                <span className="gray">({props.reviewCount}) . </span>
                <span className="gray">{props.location} </span>

            </div>
            <p className="card--title">  {props.title} </p>
            <p className = "card--price"> From ${props.price} / person</p>

        </div>
    )


}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    openSpots: PropTypes.number.isRequired,
};


export default Card