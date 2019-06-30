import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, AlertController, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  StateDataObj = {
    Title: '',
    ExplainState: '',
    symptoms: '',
    publisherName:'',
    key: ''
  }

  constructor(public navParams: NavParams, private ViewCtr: ViewController, public alertContrl: AlertController, private Modal: ModalController, public db: AngularFireDatabase) {
  
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
    this.StateDataObj.publisherName=ArrayGotData['publisherName']
    this.StateDataObj.key = ArrayGotData['key']

  }

  openModal() {

    const myModalData = {
      StateName: this.StateDataObj.Title,
      ExplainState: this.StateDataObj.ExplainState,
      symptoms: this.StateDataObj.symptoms,
      publisherName:this.StateDataObj.publisherName,
      key: this.StateDataObj.key
    }
  
    const myModal = this.Modal.create('EditFormPage', { Data: myModalData })

    myModal.present()


  }


  DeleteState(){
    try {

      let DataObj = this.db.list('ConfirmedState')

      DataObj.remove(this.StateDataObj.key).then(() => {
        this.ViewCtr.dismiss()
      })
        .catch(err => console.log(err, 'You do not have access!'));

    } catch (error) {
     alert("حصل خطا اثناء الحذف")
    }

  }

}
