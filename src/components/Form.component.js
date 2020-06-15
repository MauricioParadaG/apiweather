import React, {useState} from 'react';

const FormComponent = () => {

    const [infoCity, setInfoCityState] = useState(
        {
           //id:'',
           city:'',
           country:''
        }
      );

    return (
        <form>
            <div className="input-field col s12">
                <input type="text"
                 name="city"
                 id="city"
                // onChange={onChangeForm}
                //value={infoCity.city}
                />
                <label htmlFor="city">City: </label>
            </div>
            
            <div className="input-field col s12">
                <select type="text"
                 name="country"
                 id="country"
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

        </form>
    )
}

export default FormComponent;
