import React from 'react';
import "./style.css";
import ListGroupItem from "reactstrap/es/ListGroupItem";

const Item = props => {
    return (
        <ListGroupItem>
            {/*<div className="color" style={{background: props.color}}/>*/}
            <div className="item">
                <h5 className="title">{props.title}</h5>
                <div className="priceBlock">
                    <span className="price">{props.price} KGS</span>
                    <button className="removeBtn" onClick={props.onClick}>&#x2716;</button>
                </div>
            </div>
        </ListGroupItem>
    );
};

export default Item;