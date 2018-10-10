import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database'
 import { RegisterPage} from '../register/register'
import {AngularFireAuth} from '@angular/fire/auth'
import { FeedBackPage } from '../feed-back/feed-back';
import * as firebase from 'firebase/app'
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

/**
 * 
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  private getInfoUser=this.db.list('facebookLoginData')


   
loginInfo={
    Email:'',
    Pass:''
}
 
facebookinfo={
  email:'',
  uid:'',
  accestoken:'',
}
 

constructor(private googlePlus: GooglePlus,public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public auth:AngularFireAuth,public db:AngularFireDatabase,private fb: Facebook) {

}

ionViewDidLoad() {
  console.log('ionViewDidLoad FeedBackPage');
  // let hideRegisterForm=document.getElementsByClassName('register-form')as HTMLCollectionOf<HTMLElement>
  // hideRegisterForm[0].style.display="none"
  
}

gotoRegister(){

  this.navCtrl.push(RegisterPage)
  // let hideLoginForm=document.getElementsByClassName('login-form')as HTMLCollectionOf<HTMLElement>
  // hideLoginForm[0].style.display="none"
  // let showRegisterForm=document.getElementsByClassName('register-form')as HTMLCollectionOf<HTMLElement>
  // showRegisterForm[0].style.display="block"
}

login(){
 
  let chemail=document.getElementById('email') as HTMLInputElement;
  let chpass=document.getElementById('pass')as HTMLInputElement;

  if( chemail.value=="" && chpass.value=="" ){
this.showAlert();
  }
  else{
      this.auth.auth.signInWithEmailAndPassword(this.loginInfo.Email,this.loginInfo.Pass).then( ()=>{
     this.navCtrl.setRoot(HomePage)
 
  } ).catch(()=>{
    this.checkAvalidEmailAndPass();
  })
  }


   
}


LoginWIthFacebook(){
  this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res:FacebookLoginResponse) =>  {

  //   this.facebookinfo.accestoken=res.authResponse.accessToken;
  //   this.facebookinfo.uid=res.authResponse.userID;
  // let email:any=this.fb.api("/?fields=email,name,picture,gender",["public_profile"]);
  //   this.getInfoUser.push(this.facebookinfo)

  this.navCtrl.setRoot(HomePage)})
  .catch(e => this.showAlert2());

}


// loginWithGoogle(){

//   this.googlePlus.login({})
//   .then(res =>alert(res)
//   )
//   .catch(err =>this.showAlert2() );

// // try{
// //     this.auth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider()).then(ref =>{
// //     console.log(ref)
// //     this.navCtrl.setRoot(HomePage)
// //   })
// // }catch(err){
// //   console.log(err)
// // }


// }
 



resetPass(){
  this.showPrompt();
}



showAlert() {
  const alert = this.alertCtrl.create({
    title: 'خطأ',
    subTitle: 'يرجى التأكد من الايميل وكلمة المرور',
    buttons: ['OK']
  });
  alert.present();
}


showAlert2() {
  const alert = this.alertCtrl.create({
    title: 'خطأ',
    subTitle: 'يرجى التأكد من اتصالك بالانترنت',
    buttons: ['OK']
  });
  alert.present();
}

checkAvalidEmailAndPass() {
  const alert = this.alertCtrl.create({
    title: 'خطأ',
    subTitle: 'كلمة المرور او الرقم السري خطأ',
    buttons: ['OK']
  });
  alert.present();
}

showPrompt() {
  const prompt = this.alertCtrl.create({
    title: 'نسيت كلمة السر!',
    message: "ادخل الايميل رجاً لاستعادة كلمة السر",
    inputs: [
      {
        name: 'Email',
        placeholder: 'الايميل'
      },
    ],
    buttons: [
      {
        text: 'رجوع',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'ارسال',
        handler: data => {
        console.log(data);
        this.auth.auth.sendPasswordResetEmail(data.Email)
        }
      }
    ]
  });
  prompt.present();
}

}
