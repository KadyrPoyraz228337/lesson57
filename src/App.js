import React, {Component} from 'react';
import Form from "./components/form";
import Check from "./components/check";
import "./App.css";

class App extends Component {

    state = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : {
        text: '',
        cost: '',
        items: [
            {title: 'Games', price: 230, type: 'entertainment', id: 1},
            {title: 'Potato', price: 100, type: 'food', id: 2},
            {title: 'wheels', price: 999, type: 'car', id: 3},
        ]
    };
    counter = this.state.items.length > 0 ? this.state.items[this.state.items.length - 1].id : 0;

    render() {
        return (
            <div className="appBlock">
                <Form
                    changeText={this.changeText}
                    changeCost={this.changeCost}
                    onClick={this.addItem}
                />
                <Check
                    state={this.state.items}
                    onClick={this.removeItem}
                />
            </div>
        );
    }

    changeText = event => {
        this.setState({text: event.target.value});
    };
    changeCost = event => {
        this.setState({cost: event.target.value});
    };
    addItem = event => {
        event.preventDefault();
        if (this.state.text.length > 0 && this.state.cost.length > 0 && !isNaN(this.state.cost)) {
            const items = [...this.state.items];
            items.push({ title: this.state.text, price: parseInt(this.state.cost), type: document.querySelector('.inputSelect').value, id: ++this.counter });

            localStorage.setItem('items', JSON.stringify({items: items, text: '', cost: ''}));
            this.setState({items: items, text: '', cost: ''});
        }
        this.setState({text: '', cost: ''});
        document.querySelector('.textInput').value = '';
        document.querySelector('.costInput').value = '';
    };
    removeItem = id => {
        const items = [...this.state.items];
        const index = items.findIndex(item => item.id === id);
        items.splice(index, 1);

        localStorage.setItem('items', JSON.stringify({items: items, text: '', cost: ''}));
        this.setState({items: items});
    }
}

export default App;