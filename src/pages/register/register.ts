import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database'
import {AngularFireAuth} from '@angular/fire/auth'
import {FeedBackPage} from '../../pages/feed-back/feed-back'
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerInfo={
    regname:'',
    regemail:'',
    regpass:''
    }

    getList=this.db.list('PersonaInfo')

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AngularFireAuth,public db:AngularFireDatabase ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  register(){
    this.auth.auth.createUserWithEmailAndPassword(this.registerInfo.regemail,this.registerInfo.regpass).then(()=>{
      this.navCtrl.setRoot(FeedBackPage)
    })

    this.getList.push(this.registerInfo);


  }

}
