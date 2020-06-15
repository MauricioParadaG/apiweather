import React from 'react';

const WeatherComponent = props => {

    if(!props.apiResultState.name) return null;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2> The weather from {props.apiResultState.name} is:</h2>
                <p className="temperature">
                  {props.apiResultState.main.temp}     <span>&#x2103;</span>
                </p> 

                <p> Maximun Temperature: {props.apiResultState.main.temp_max} <span>&#x2103;</span>
                </p>
                <p> Minimun Temperature: {props.apiResultState.main.temp_min} <span>&#x2103;</span>
                </p>

            </div>
        </div>
    )
}

export default WeatherComponent;
