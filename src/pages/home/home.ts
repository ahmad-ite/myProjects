import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Weather1Provider } from '../../providers/weather1/weather1';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage'
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather: any;
  location: {
    city: string,
    state: string
  }
  constructor(public navCtrl: NavController, private wp: Weather1Provider, private storg:
     Storage//, private geolocation: Geolocation
    ) {
  }

  ionViewWillEnter() {
    console.log('111111111111');
    console.log(this.storg);
    this.storg.get('location').then((val) => {
      if (val != null) {
        console.log('herrrrr');
        console.log(val);
        this.location = JSON.parse(val);

        console.log(this.location);
      } else {



        console.log('vvvvvvvvvvvvvvv');
        this.location = {
          city: 'Miami',
          state: 'FL'
        }
      }
      /* 
       console.log('1010100101010110');
       this.geolocation.getCurrentPosition().then((resp) => {
         // resp.coords.latitude
         // resp.coords.longitude
         console.log(resp);
       }).catch((error) => {
         console.log('Error getting location', error);
       });
   */
      this.wp.getWeather(this.location.city, this.location.state).subscribe(wether => {
        console.log(wether);
        this.weather = wether.current_observation;
      });
    });


  }

}
