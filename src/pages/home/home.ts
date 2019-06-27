import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { AngularFireAuth } from '@angular/fire/auth';
import{ApiServiseProvider} from '../../providers/api-servise/api-servise';
import{MyApp} from '../../app/app.component'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  FireBaseUser: string;
  FacebokUser: string;
  showFirebaseUser = false
  showFacebookUser = false
  constructor(public navCtrl: NavController, public callNumber: CallNumber, public auth: AngularFireAuth,public apiAuth:ApiServiseProvider) {

    if(apiAuth.UserName!=''){
      this.FacebokUser=apiAuth.UserName
      this.showFacebookUser=true
    }else{
      this.showFacebookUser=true
    } 
    //if (this.auth.auth.currentUser != null) {
if(this.apiAuth.AuthState==true){
      if(this.auth.auth.currentUser.email=='h@h.com'){
        
      MyApp.prototype.AuthState=true
      }else {
          
      MyApp.prototype.AuthState=false //////////////For Admin Panal
      }

      this.FireBaseUser = this.auth.auth.currentUser.email
      let NameOfcurentUser = this.FireBaseUser.split("@");
      this.FireBaseUser = NameOfcurentUser[0]
      this.showFirebaseUser = true
    } else {
      MyApp.prototype.AuthState=this.apiAuth.AuthState
      this.showFirebaseUser = false;
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
