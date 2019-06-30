import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  StateDataObj = {
    Title: '',
    ExplainState: '',
    symptoms: ''
  }



  constructor( public navParams: NavParams, private ViewCtr: ViewController) {
  }

  ionViewDidLoad() {
    this.GetDataFromStatePage()
  }


  CloseModal() {
    this.ViewCtr.dismiss()
  }

  GetDataFromStatePage() {
    const ArrayGotData = this.navParams.get('Data')
    this.StateDataObj.Title = ArrayGotData['StateName']
    this.StateDataObj.ExplainState = ArrayGotData['ExplainState']
    this.StateDataObj.symptoms = ArrayGotData['symptoms']



    console.log(ArrayGotData)

  }

}
