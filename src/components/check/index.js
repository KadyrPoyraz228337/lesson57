import React from 'react';
import Item from "../item";
import Chart from "../chart";
import ListGroup from "reactstrap/es/ListGroup";
import Badge from "reactstrap/es/Badge";

const Check = props => {
    let total = 0;
    const types = {food: 0, entertainment: 0, car: 0, total: 0};
    return (
        <ListGroup>
            {props.state.map(item => {
                total += item.price;
                types.food = item.type === 'food' ? types.food += item.price : types.food;
                types.entertainment = item.type === 'entertainment' ? types.entertainment += item.price : types.entertainment;
                types.car = item.type === 'car' ? types.car += item.price : types.car;
                types.total += item.price;
                return (
                    <Item
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        color={item.color}
                        onClick={() => props.onClick(item.id)}
                    />
                )
            })}
            {total > 0 && <p>Total <Badge color="secondary">{total}</Badge></p>}
            <Chart
                object={types}
            />
        </ListGroup>
    );
};

export default Check;