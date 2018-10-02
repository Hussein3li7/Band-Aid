import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BrokenPage } from '../broken/broken';
import { FaintingPage } from '../fainting/fainting';
import { BurnsPage } from '../burns/burns'
import { SunstrokePage } from '../sunstroke/sunstroke';
import { ChokingPage } from '../choking/choking';
import { BloodCirculationPage } from '../blood-circulation/blood-circulation';
import { UnconsciousnessPage } from '../unconsciousness/unconsciousness';
import { MusculoskeletalInjuriesPage } from '../musculoskeletal-injuries/musculoskeletal-injuries';
import { MaxTemperaturesPage } from '../max-temperatures/max-temperatures';
import { AchesPage } from '../aches/aches';
import { MajorAccidentsPage } from '../major-accidents/major-accidents';
import { EmergencyBirthPage } from '../emergency-birth/emergency-birth';
import { WoundsPage } from '../wounds/wounds';
import { PythonPage } from '../python/python';
import * as firebase from 'firebase/app'
import {AngularFireDatabase,AngularFireList, AngularFireObject} from '@angular/fire/database'
import{AngularFireAuth}from '@angular/fire/auth'
import {FeedBackPage}from '../../pages/feed-back/feed-back'

/**
 * Generated class for the StatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-state',
  templateUrl: 'state.html',
})
export class StatePage {

  searchQuery: string = '';
  items: string[];
  items2: string[];
  val: any
 
  test={
    state:'',
    info:'',

  }

  giftList: AngularFireObject<any>;
  getList:AngularFireList<any>
  itemArray=[];
  myObject = []
  list=this.db.list('addList')

  logedin:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public db:AngularFireDatabase,public auth:AngularFireAuth) {

    this.initializeItems();
 
    this.giftList = db.object('addList');
this.getList=db.list('addList')

  }


  initializeItems() {
    this.items = [
      'الكسر',
      'ضربة شمس',
      'الاغماء',
      'الجروح والنزف',
      'الحروق',
      'الاختناق',
      'اظطرابات الدورة الدموية',
      'التسمم',
 
      'اصابات العضلات والمفاصل',
      'تاثير درجات الحرارة القصوى',
 
      'الاوجاع',
 
 
      'الولادة الطارئة',
      'الافاعي والعقارب'
    ];


  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    this.val = ev.target.value;
    this.items2 = this.val
    console.log(this.val)

    // if the value is an empty string don't filter the items
    if (this.val && this.val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(this.val.toLowerCase()) > -1);
      })
    }

  }

  goToDatails(getitems) {

    for (let i of this.items) {

      console.log(getitems)

      if (i == getitems) {

        if (i == 'الكسر') {

          this.navCtrl.push(BrokenPage)

        }
        else if (i == 'ضربة شمس') {

          this.navCtrl.push(SunstrokePage)
        }
        else if (i == 'الجروح والنزف') {

          this.navCtrl.push(WoundsPage)
        }
        else if (i == 'الحروق') {

          this.navCtrl.push(BurnsPage)
        }
        else if (i == 'الاغماء') {
          this.navCtrl.push(FaintingPage)
        }
        else if (i == 'الاختناق') {
          this.navCtrl.push(ChokingPage)
        }
        else if (i == 'اظطرابات الدورة الدموية') {
          this.navCtrl.push(BloodCirculationPage)
        }
        else if (i == 'التسمم') {
          this.navCtrl.push(UnconsciousnessPage)
        }

        else if (i == 'اصابات العضلات والمفاصل') {
          this.navCtrl.push(MusculoskeletalInjuriesPage)
        }
        else if (i == 'تاثير درجات الحرارة القصوى') {
          this.navCtrl.push(MaxTemperaturesPage)
        }

        else if (i == 'الاوجاع') {
          this.navCtrl.push(AchesPage)
        }
        else if (i == 'التصرف في الحوادث الكبرى') {
          this.navCtrl.push(MajorAccidentsPage)
        }


        else if (i == 'الولادة الطارئة') {
          this.navCtrl.push(EmergencyBirthPage)
        }
        else if (i == 'الافاعي والعقارب') {
          this.navCtrl.push(PythonPage)
        }

      }

    }

  }

 


  addState(){

    this.list.push(this.test)

    this.giftList.snapshotChanges().subscribe(action => {
      
      if (action.payload.val() == null || action.payload.val() == undefined) {
        console.log('no data' )
      } else {

        // this.getList.snapshotChanges().subscribe(action=>{
        //   action.forEach(actios=>{
        //     let y=actios.payload.toJSON();
        //     y['key']=actios.key;
        //     this.itemArray.push(y as info)
        //   })
        // })
      this.itemArray.push(action.payload.val() as info )
     this.myObject = Object.entries(this.itemArray[0])
       this.getList.push[this.itemArray[0]]
      
//         this.myObject=Object.create(this.itemArray[0])
//         console.log(this.myObject[0]['info'])
//  console.log(this.myObject)

        for(let x=0 ;x<this.myObject.length;x++){
        console.log(this.myObject[x][1]['info'])
        this.items.push(this.myObject[x][1]['info'])
        }

      }
 
     })

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad StatePage');
    let user=firebase.auth().currentUser;
 if(user){
   this.logedin=true;
 }
 else{
   this.logedin=false;
 }

 

  }

}


export class info{
  state:string='';
  info:string='';
}