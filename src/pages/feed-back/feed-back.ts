import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 import {LoginPage} from '../../pages/login/login'
 import { AngularFireDatabase,AngularFireList } from '@angular/fire/database'
 import {HomePage} from '../../pages/home/home'
 import {AngularFireAuth} from '@angular/fire/auth'
  import * as firebase from  'firebase/app'
  import { AlertController } from 'ionic-angular';


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

  feedBack:'';
  
logedin:boolean=true;

feedbackList=this.db.list('FeedBack')
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public auth:AngularFireAuth,public db:AngularFireDatabase ) {



    firebase.auth().onAuthStateChanged(userr=>{
      if(userr){
        this.logedin=true;
      }
      else{ 
       this.logedin=false;
      this.navCtrl.push(LoginPage)
      }
  })
 
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedBackPage');
  }



  getFeedBack(){
    this.feedbackList.push(this.feedBack).then(()=>{
 this.showAlert();
    })
    
    let emptyFiled=document.getElementsByClassName('feed') as HTMLCollectionOf<HTMLInputElement>
    emptyFiled[0].value="";
  }


  logut(){
    this.showConfirm()
    // this.auth.auth.signOut().then(()=>{
    //   this.navCtrl.setRoot(HomePage)
    // })
  }



  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'تسجيل الخروج ؟',
      buttons: [
        {
          text: 'لا',
          handler: () => {
            return;
          }
        },
        {
          text: 'نعم',
          handler: () => {
            console.log('Agree clicked');
            this.auth.auth.signOut().then(()=>{
              this.navCtrl.setRoot(HomePage)
            });
          }
        }
      ]
    });
    confirm.present();
  }


  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'شكرا لك',
      subTitle: 'شكرا لك على ملاحظات ',
      buttons: ['OK']
    });
    alert.present();
  }

}
