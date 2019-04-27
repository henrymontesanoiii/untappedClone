import React, { Component } from 'react';
import API from '../../utils/API';



// on load, page will call openweather api for a NY, USA weather 

class BeerList extends Component {

  state = {
    isLoaded: false,
    beers: [],

    //  iconUrl: "http://openweathermap.org/img/w/" + this.state.icon + ".png"
  }

  // on load, call below method for default weather in NYC
  componentDidMount() {
    // call api
    this.getAllBeers();
    
  }

  getAllBeers = () => {
    API
      .getAllBeers()
      .then((res) => {
        for (var i = 0, l = res.data.length; i < l; i++) {
          
          this.state.beers.push(res.data[i])
          }
        ;
        this.setState({ isLoaded: true });
        
        
      })
      
      .catch((err) => {
        console.log(err);
      });
  }


  // write method to hold onto API call for weather
  // getWeatherFunction = () => {
  //   API
  //     .getWeather(this.state.city, this.state.country)
  //     .then((res) => {
  //       console.log(res.data);
  //       this.setState({ temp_min: res.data.main.temp_min, temp_max: res.data.main.temp_max, humidity: res.data.main.humidity, description: res.data.weather[0].description, icon: res.data.weather[0].icon})
  //       // console.log(this.state.icon)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }




  render() {
    if(!this.state.isLoaded){
      return <div>Loading...</div>;
    }
    else{
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 text-center weather-type">
            <h1 className="my-5 py-5">Beers:</h1>
          <ul>
          {this.state.beers.map(beer => (
              <li key = {beer.id}>{beer.name}</li>
                
            ))}
            </ul>

            


        </div>
      </div>
      </div>

    )
  }
}
}

export default BeerList;