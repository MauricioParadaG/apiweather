import React, {useState, useEffect} from 'react';
import HeaderComponent from './components/Header.component';
import FormComponent from './components/Form.component';
import WeatherComponent from './components/Weather.component';
import ErrorComponent from './components/Error.component';

function App() {

  const [formSearched, setFormSearchedState] = useState({
    city:'',
    country:''
  });

  const [apiResult, setApiResultState] = useState({});

  const [error, setErrorState] = useState(false);

  useEffect(() => {
    //console.log(formSearched.city);
    const checkingApi = async () =>{

      if(formSearched.city !==''){
        const appId = '82b599945f472484edff9feab87b1c68';
        const url =  `https://api.openweathermap.org/data/2.5/weather?q=${formSearched.city},${formSearched.country}&appid=${appId}&units=metric`;
        // Getting the answer from that url query
        const res =  await fetch(url);
        const data = await res.json();
  
        //console.log(data);
        setApiResultState(data);

        if(data.cod === "404"){
          setErrorState(true);
         } else {
         setErrorState(false);
        }

      }
    };
    checkingApi();
  }, [formSearched]);




  return (
    <>
      {/** if - error message with .css*/}
      {error ?
          <ErrorComponent message="That city does not exist"/>
          : null
          
      }
    
      <HeaderComponent
        title= 'SearcherWeather.world'
      />

      <div className="form-container">
        <div className="container">
          <div className="row">
            
            <div className="col m6 s12">
              <FormComponent
              setFormSearchedState={setFormSearchedState}
              />
            </div>

            <div className="col m6 s12">
              <WeatherComponent
              apiResultState={apiResult}
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
