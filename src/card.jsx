
import star from "./assets/star.png"
import PropTypes from 'prop-types';


function Card(props){
    let badgeText;
    if (props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className ="card--badge" > {badgeText}</div>}
            
            <img src= {props.item.img} alt = "katie" className="card--image"/>
            <div className="card--stats">
                <img src= {star} alt="star" className="card--star"/>
                <span> {props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) . </span>
                <span className="gray">{props.item.location} </span>

            </div>
            <p className="card--title">  {props.item.title} </p>
            <p className = "card--price"> From ${props.item.price} / person</p>

        </div>
    )


}

Card.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            rating: PropTypes.number.isRequired,
            reviewCount: PropTypes.number.isRequired
        }).isRequired,
        location: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        openSpots: PropTypes.number.isRequired,
    }).isRequired,
};


export default Card