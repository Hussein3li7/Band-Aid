import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController ) {

  }


  // police() {
  //   this.callNumber.callNumber("121", true)
  //     .then(res => console.log('Launched dialer!', res))
  //     .catch(err => console.log('Error launching dialer', err));

  // }

  // ambulance() {
  //   this.callNumber.callNumber("122", true)
  //     .then(res => console.log('Launched dialer!', res))
  //     .catch(err => console.log('Error launching dialer', err));
  // }

  // Cvile() {
  //   this.callNumber.callNumber("115", true)
  //     .then(res => console.log('Launched dialer!', res))
  //     .catch(err => console.log('Error launching dialer', err));
  // }

  // midical() {
  //   this.callNumber.callNumber("404", true)
  //     .then(res => console.log('Launched dialer!', res))
  //     .catch(err => console.log('Error launching dialer', err));
  // }




}
