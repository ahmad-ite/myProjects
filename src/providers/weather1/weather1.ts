import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class Weather1Provider {
apikey='99dfe35fcb7de1ee';
url ;

  constructor(public http: Http) {
    console.log('Hello Weather1Provider Provider');
    this.url='http://api.wunderground.com/api/'+this.apikey+'/conditions/q/';
  }


  getWeather(city, state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
      .map(res => res.json());
  }
}
