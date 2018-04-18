import { Component, state } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { Location } from '@angular/common';
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  city: string;
  state: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storge: Storage) {
    this.storge.get('location').then((val) => {
      if (val != null) {
        let location = JSON.parse(val);
        this.city = location.city;
        this.state = location.state;
      }
      else {
        this.city = "Miami";
        this.state = "FL";
      }

    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm() {
    let location = {
      city: this.city,
      state: this.state
    }
    console.log(location);
    this.storge.set('location', JSON.stringify(location));
    console.log("555");
    this.navCtrl.push(HomePage);
    console.log(  this.navCtrl);
    console.log("666");
  }
}
