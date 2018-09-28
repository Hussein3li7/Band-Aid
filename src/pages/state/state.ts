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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.initializeItems();

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
      'لدغة الافعى'
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
        else if (i == 'لدغة الافعى') {
          this.navCtrl.push(PythonPage)
        }

        // 'اظطرابات الدورة الدموية',
        // 'فقدان الوعي',
        // ' اصابات الظهر',
        // 'اصابات العضلات والمفاصل',
        // 'تاثير درجات الحرارة القصوى',
        // '',
        // ' الاوجاع',
        // 'التصرف في الحوادث الاكبرى',
        // 'الضمادات والعصائب',
        // 'التدبير والنقل',
        // ' الولادة الطارئة',

      }

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatePage');

  }




}
