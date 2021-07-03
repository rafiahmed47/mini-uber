import React from 'react';
import "./Card.css"
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {img, name} = props.vehicle;
    return (
        <div className="cards">
            <img src={img} alt="" />
            <Link id='cardbtn' to={"/destination/" + name}>Book a {name}</Link>
        </div>
    );
};

export default Card;