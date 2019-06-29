import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
 

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  Title=''

  ExplainState=''

  constructor(public navCtrl: NavController, public navParams: NavParams,private ViewCtr:ViewController) {
  }

  ionViewDidLoad() {
    this.GetDataFromStatePage()
  }


  CloseModal(){
    this.ViewCtr.dismiss()
  }

  GetDataFromStatePage(){
   const ArrayGotData = this.navParams.get('Data')
  this.Title=ArrayGotData['StateName']
this.ExplainState=ArrayGotData['ExplainState']



   console.log(ArrayGotData)
  
  }

}
