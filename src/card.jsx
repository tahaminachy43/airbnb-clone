
import star from "./assets/star.png"
import PropTypes from 'prop-types';


function Card(props){
    return(
        <div className="card">
            
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
};

export default Card