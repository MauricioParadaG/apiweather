import React from 'react';
import HeaderComponent from './components/Header.component';
import FormComponent from './components/Form.component';

function App() {
  return (
    <>
      <HeaderComponent
        title= 'SearcherWeather.world'
      />

      <div className="form-container">
        <div className="container">
          <div className="row">
            
            <div className="col m6 s12">
              <FormComponent/>
            </div>

            <div className="col m6 s12">
              2
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
