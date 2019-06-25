import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'

import { LoginPage } from '../../pages/login/login'
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase/app'
import { ApiServiseProvider } from '../../providers/api-servise/api-servise';
@IonicPage()
@Component({
  selector: 'page-add-new-state',
  templateUrl: 'add-new-state.html',
})
export class AddNewStatePage {

  fireList = this.db.list("newState")

  getDataFromUser = {
    stateName: '',
    explainState: '',
    publisherName: ''
  }
  disableButton = false

  logedinFirebase: boolean;
  name: string;
  curentUser: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, public alertCtrl: AlertController, public auth: AngularFireAuth, public apiAuth:ApiServiseProvider  ) {


 if(apiAuth.AuthState==true){
      this.logedinFirebase=true;
    }else{
      this.logedinFirebase=false
      this.navCtrl.push(LoginPage)
    }



    // this.name = navParams.get('data')
    // let checkFirease = firebase.auth().currentUser;

    // if (this.name == 'true') {
    //   this.logedinFirebase = true;
    // }
    // else if (checkFirease) {
    //   this.logedinFirebase = true;
    // }
    // else {
    //   this.logedinFirebase = false
    //   this.navCtrl.push(LoginPage)
    // }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewStatePage');

  }

  SetNewState() {
    let nameState = document.getElementById('nameState') as HTMLInputElement;
    let textFeed = document.getElementById('textFeed') as HTMLInputElement;

    this.getDataFromUser.publisherName = this.curentUser = this.auth.auth.currentUser.email

    if (nameState.value.trim() !== "" && textFeed.value.trim() !== "") {

      this.disableButton = true
      this.fireList.push(this.getDataFromUser).then(() => {

        this.showAlert()
        this.disableButton = false

      }
      ).catch(() => {
        this.showErrorAlert()
      })
    } else {
      this.showEmptyField()
    }

  }

  clear() {

    let textErea = document.getElementById('textFeed') as HTMLInputElement

    textErea.value = ""

  }


  goToLogin() {
    this.navCtrl.push(LoginPage)
  }

  showAlert() {


    if (this.auth.auth.currentUser != null) {
      this.curentUser = this.auth.auth.currentUser.email
      let NameOfcurentUser = this.curentUser.split("@");
      this.curentUser = NameOfcurentUser[0]
    }


    const alert = this.alertCtrl.create({
      title: 'شكرا لك ' + this.curentUser,
      subTitle: 'سوف تتم مراجعة الاضافة بعد 24 ساعة',
      buttons: ['OK'],
      cssClass: 'secondary'
    });
    alert.present();
  }
  showErrorAlert() {
    const alert = this.alertCtrl.create({
      title: 'خطأ',
      subTitle: 'يرجى التأكد من اتصالك بالانترنت',
      buttons: ['OK']
    });
    alert.present();
  }


  showEmptyField() {
    const alert = this.alertCtrl.create({
      title: 'تنبيه',
      subTitle: 'يرجى عدم ترك الحقول فارغة',
      buttons: ['ok']
    });
    alert.present();
  }

}
