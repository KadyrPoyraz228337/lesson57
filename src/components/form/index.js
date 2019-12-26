import React from 'react';
import "./style.css";
import Button from "reactstrap/es/Button";

const Form = props => {
    return (
        <form>
            <div className="formBlock">
                <input type="text" className="textInput" placeholder="Item name" onChange={value => props.changeText(value)}/>
                <input type="text" className="costInput" placeholder="Cost" onChange={value => props.changeCost(value)}/>
                KGS
                <select className="inputSelect">
                    <option value="food">food</option>
                    <option value="car">car</option>
                    <option value="entertainment">entertainment</option>
                </select>
                <Button color="primary" className={"formBtn"} onClick={event => props.onClick(event)}>Add</Button>
            </div>
        </form>
    );
};

export default Form;