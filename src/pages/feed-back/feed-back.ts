import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 import {LoginPage} from '../../pages/login/login'
 import { AngularFireDatabase,AngularFireList } from '@angular/fire/database'
 import {HomePage} from '../../pages/home/home'
 import {AngularFireAuth} from '@angular/fire/auth'
  import * as firebase from  'firebase/app'

/**
 * Generated class for the FeedBackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed-back',
  templateUrl: 'feed-back.html',
})
export class FeedBackPage {


  public user:firebase.User
 
    Email:'';
    Pass:'';
  
logedin:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AngularFireAuth,public db:AngularFireDatabase ) {

    // this.auth.authState.subscribe(logedin=>{
    //   console.log(logedin)
    //   if(this.user){
    //    // this.navCtrl.push(LoginPage)
    //    console.log("logedin")
    //   }
    //   else{
    //     //this.navCtrl.push(FeedBackPage)
       
    //   }

    // })
 

    firebase.auth().onAuthStateChanged(userr=>{
      if(userr){
        //this.navCtrl.push(FeedBackPage)
        this.logedin=true;
      }
      else{
         this.navCtrl.push(LoginPage)
       this.logedin=false;
      }
  })
    

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedBackPage');
  }




  hideLoginForm(){
    let hide=document.getElementsByClassName('login-form')as HTMLCollectionOf<HTMLElement>
    hide[0].style.display="none"
  }


  logut(){
    this.auth.auth.signOut().then(()=>{
      this.navCtrl.setRoot(HomePage)
    })
  }



}

// window.onload= ()=>{
//   firebase.auth().onAuthStateChanged(userr=>{
//     if(userr){
//       this.navCtrl.push(FeedBackPage)
//     }
//     else{
//       this.navCtrl.push(LoginPage)
       
//     }
// })
// }