import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
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
import { AngularFireDatabase } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'page-state',
  templateUrl: 'state.html',
})
export class StatePage {

  searchQuery: string = '';
  items: string[];
  items2: string[];
  val: any
  val2: any

  Network = false

  ConfrimedStateFullData = []
  ConfrimedStateSmallData = []

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public auth: AngularFireAuth, private Modal: ModalController) {


    this.initializeItems();
    this.Network = true
    this.GetConfirmedData()

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatePage');

  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    this.val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (this.val && this.val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(this.val.toLowerCase()) > -1);
      })
    }

  }

  goToDatails(getitems) {

    for (let i of this.items) {

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


  GetConfirmedData() {

    try {

      let ConfirmedData = this.db.object('ConfirmedState')
      ConfirmedData.snapshotChanges().subscribe(data => {
        if (data.payload.val() != null || data.payload.val() != undefined) {
          this.ConfrimedStateFullData.push(data.payload.val())
          this.ConfrimedStateSmallData = Object.entries(this.ConfrimedStateFullData[0])

          this.Network = false
        } else {
          console.log("No data")
        }
      })

    } catch (error) {

    }


  }


  openModal(StateName: String, ExplainState: string, symptoms: string,publisherName:string, key: string) {

    const myModalData = {
      StateName: StateName,
      ExplainState: ExplainState,
      symptoms: symptoms,
      publisherName:publisherName,
      key: key
    } 

    const myModal = this.Modal.create('ModalPage', { Data: myModalData })

    myModal.present()


  }




}

