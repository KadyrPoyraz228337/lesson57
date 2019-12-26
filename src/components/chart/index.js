import React from 'react';
import "./style.css"

const Chart = props => {
    const types = props.object;
    return types.total > 0 && (
        <div className="chartBlock">
            <div className="chart">
                <div className="car" style={{width: `${100 / (types.total / types.car)}%`, background: 'green'}}/>
                <div className="food" style={{width: `${100 / (types.total / types.food)}%`, background: 'red'}}/>
                <div className="entertainment" style={{width: `${100 / (types.total / types.entertainment)}%`, background: 'yellow'}}/>
            </div>
            {types.car > 0 && <div className="chartItem"><span style={{background: 'green'}}/>Car</div>}
            {types.food > 0 && <div className="chartItem"><span style={{background: 'red'}}/>Food</div>}
            {types.entertainment > 0 && <div className="chartItem"><span style={{background: 'yellow'}}/>entertainment</div>}
        </div>
    );
};

export default Chart;