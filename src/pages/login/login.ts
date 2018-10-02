import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database'
 
import {AngularFireAuth} from '@angular/fire/auth'
import { FeedBackPage } from '../feed-back/feed-back';
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


   
info={
    Email:'',
    Pass:''
}

constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AngularFireAuth,public db:AngularFireDatabase ) {

}

ionViewDidLoad() {
  console.log('ionViewDidLoad FeedBackPage');
}


hideLoginForm(){
  let hide=document.getElementsByClassName('login-form')as HTMLCollectionOf<HTMLElement>
  hide[0].style.display="none"
}


login(){
 
  this.auth.auth.signInWithEmailAndPassword(this.info.Email,this.info.Pass).then( ()=>{
     this.navCtrl.setRoot(FeedBackPage)
    console.log("Logedin")
  } ).catch(e=>{
    alert("Soory")
  })
   

}

// reg(){
//   this.auth.auth.createUserWithEmailAndPassword(this.info.Email,this.info.Pass)
// }


// Add(){

//  this.getInfoUser.push(this.info)


// }


}
