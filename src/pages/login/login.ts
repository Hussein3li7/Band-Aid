import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database'
 import { RegisterPage} from '../register/register'
import {AngularFireAuth} from '@angular/fire/auth'
import { FeedBackPage } from '../feed-back/feed-back';
import * as firebase from 'firebase/app'
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
/**
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


  private getInfoUser=this.db.list('LoginData')


   
loginInfo={
    Email:'',
    Pass:''
}
 

constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public auth:AngularFireAuth,public db:AngularFireDatabase ) {

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

  if( chemail.value=="" ||chpass.value=="" ){
this.showAlert();
  }
  else{
      this.auth.auth.signInWithEmailAndPassword(this.loginInfo.Email,this.loginInfo.Pass).then( ()=>{
     this.navCtrl.setRoot(HomePage)
    console.log("Logedin")
  } ).catch(e=>{
    alert("Soory")
  })
  }


   
}


LoginWIthFacebook(){

  try{
      this.auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(ref=>{
    console.log(ref)
    this.navCtrl.setRoot(HomePage)
  })
  }catch(err){
    console.log(err)
  }


}


loginWithGoogle(){
try{
    this.auth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider()).then(ref =>{
    console.log(ref)
    this.navCtrl.setRoot(HomePage)
  })
}catch(err){
  console.log(err)
}


}
 

showAlert() {
  const alert = this.alertCtrl.create({
    title: 'خطأ',
    subTitle: 'يرجى التأكد من الايميل وكلمة المرور',
    buttons: ['OK']
  });
  alert.present();
}

}
