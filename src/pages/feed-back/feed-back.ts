import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 import {LoginPage} from '../../pages/login/login'
 import { AngularFireDatabase,AngularFireList } from '@angular/fire/database'
 import {HomePage} from '../../pages/home/home'
 import {AngularFireAuth} from '@angular/fire/auth'
  import * as firebase from  'firebase/app'
  import { AlertController } from 'ionic-angular';
  import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

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
  
  logedinFirebase:boolean;
 // logedinFacebook:boolean;

 feedbackList=this.db.list('FeedBack')
 feedbackobj=this.db.object('FeedBack')

name:string;

  constructor(private fb: Facebook,public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public auth:AngularFireAuth,public db:AngularFireDatabase ) {
    
    this.name=navParams.get('data')
    let checkFirease=firebase.auth().currentUser;

    if(this.name=='true'){
      this.logedinFirebase=true;
    }
    else if(checkFirease){
      this.logedinFirebase=true;
    }
    else{
      this.logedinFirebase=false
      this.navCtrl.push(LoginPage)
    }
 
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedBackPage');
  }



  getFeedBack(){

    let valuefield=document.getElementById('textFeed') as HTMLInputElement
    
    if(valuefield.value==""){
    this.showAlertempityField()
    }
else{
      this.feedbackList.push(this.feedBack).then(()=>{
 this.showAlert();
    })
}

    
    let emptyFiled=document.getElementsByClassName('feed') as HTMLCollectionOf<HTMLInputElement>
    emptyFiled[0].value="";

  }


  logut(){
    this.showConfirm()
    // this.auth.auth.signOut().then(()=>{
    //   this.navCtrl.setRoot(HomePage)
    // })
  }


  goToLogin(){
    this.navCtrl.push(LoginPage)
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
 
            let facebookUser=this.fb.getLoginStatus();

            let fireBaseuser=firebase.auth().currentUser;

            try
            {
                if(fireBaseuser){
                  this.auth.auth.signOut().then(()=>{
              this.navCtrl.setRoot(HomePage)
            })
            }else  if(facebookUser){
              this.fb.logout().then(()=>{
                 this.navCtrl.setRoot(HomePage)
              })        
            }

            }
          catch(err){
console.log(err)
          }

          }
        }
      ]
    });
    confirm.present();
  }


  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'شكرا لك',
      subTitle: 'شكرا لك على ملاحظاتك ',
      buttons: ['OK']
    });
    alert.present();
  }


  showAlertempityField() {
    const alert = this.alertCtrl.create({
      title: 'خطا',
      subTitle: 'الحقل فارغ ! ',
      buttons: ['OK']
    });
    alert.present();
  }

}