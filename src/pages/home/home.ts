import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  curentUser: string;
  showUser = false
  constructor(public navCtrl: NavController, public callNumber: CallNumber, public auth: AngularFireAuth) {

    if (this.auth.auth.currentUser != null) {
      this.curentUser = this.auth.auth.currentUser.email
      let NameOfcurentUser = this.curentUser.split("@");
      this.curentUser = NameOfcurentUser[0]
      this.showUser = true
    } else {
      this.showUser = false;
    }
  }

  redcross1() {
    this.callNumber.callNumber("07706740075", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(ree => alert("حصل خطا اثناء الاتصال"))
  }
  redcross2() {
    this.callNumber.callNumber("07707789533", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(ree => alert("حصل خطا اثناء الاتصال"))

  }

  redcross3() {
    this.callNumber.callNumber("07815725184", true)
      .then(res => null)
      .catch(ree => alert("حصل خطا اثناء الاتصال"))

  }

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
