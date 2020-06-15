import React, {useState} from 'react';
import ErrorComponent from './Error.component';

const FormComponent = props => {

    const [searchCity, setSearchCityState] = useState(
        {
           //id:'',
           city:'',
           country:''
        }
      );

    const [error, setErrorState] = useState(false);

    const onChangeForm = event => {
        setSearchCityState({
            ...searchCity,
            // adding an ID - uuid library
            //id: uuid(),
            // adding the form info to the state
            [event.target.name]: event.target.value
        });
    } 



    const onSubmit = event => {
        event.preventDefault();

        // validation
        if (searchCity.city.trim() ==='' || 
        searchCity.country.trim() ==='' ){
            setErrorState(true);
            return;
        } 
        setErrorState(false);

        props.setFormSearchedState(searchCity);
/*
        setSearchCityState({ 
            city:'',
            country:''
        });
*/
    }

    return (
        <form onSubmit={onSubmit}>
        {/** if - error message with .css*/}
        {error ?
            <ErrorComponent message="All filds are required"/>
            : null
        }
            <div className="input-field col s12">
                <input type="text"
                 name="city"
                 id="city"
                onChange={onChangeForm}
                value={searchCity.city}
                />
                <label htmlFor="city">City: </label>
            </div>
            
            <div className="input-field col s12">
                <select type="text"
                 name="country"
                 id="country"
                 onChange={onChangeForm}
                 value={searchCity.country}
                >
                  <option value="">- Select -</option>
                  <option value="CO">Colombia</option>
                  <option value="DE">Deutschland</option>
                  <option value="US">United States</option>
                  <option value="AR">Argentina</option>
                  <option value="ES">España</option>
                </select>

                <label htmlFor="country">Country: </label>
            </div>

            {/** Button */}
        <div className="input-field col s12">
            <input 
            type="submit"
            value="Check the Weather"
            className="waves-effect waves-light btn-large btn-block yellow accent-4"
            /> 
        </div>

        </form>
    )
}

export default FormComponent;
