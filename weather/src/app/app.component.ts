import { Component } from '@angular/core';
import { CurrentWeatherService } from './services/current-weather.service';
import { ForecastService } from './services/forecast.service';
import { GeolocationService } from './services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'weather';

  constructor(private geolocationService : GeolocationService,private weatherService : CurrentWeatherService, private forecastService : ForecastService){}

  ngOnInit(){
    //this.weatherService.weather$.subscribe(console.log);
    //this.forecastService.weather$.subscribe(console.log);
  }
}
