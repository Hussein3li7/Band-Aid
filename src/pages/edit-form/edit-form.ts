import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';


@IonicPage()
@Component({
  selector: 'page-edit-form',
  templateUrl: 'edit-form.html',
})
export class EditFormPage {

  getDataFromUser = {
    StateName: '',
    ExplainState: '',
    symptoms: '',
    PulisherName: ''
  }
  disableButton = false

  logedinFirebase: boolean;
  name: string;
  curentUser: any

  StateDataObj = {
    Title: '',
    ExplainState: '',
    symptoms: '',

  }
  key: ''

  constructor(public navParams: NavParams, private ViewCtr: ViewController, public alertContrl: AlertController, public db: AngularFireDatabase) {

    this.GetDataFromStatePage()

  }

  GetDataFromStatePage() {
    const ArrayGotData = this.navParams.get('Data')
    this.getDataFromUser.StateName = ArrayGotData['StateName']
    this.getDataFromUser.ExplainState = ArrayGotData['ExplainState']
    this.getDataFromUser.symptoms = ArrayGotData['symptoms']
    this.getDataFromUser.PulisherName = ArrayGotData['publisherName']
    this.key = ArrayGotData['key']

  }

  CloseModal() {
    this.ViewCtr.dismiss()
  }


  SaveUpdateinfo() {

    try {

      let DataObj = this.db.list('ConfirmedState')

      DataObj.set(this.key, this.getDataFromUser).then(() => console.log('success'))
        .catch(err => console.log(err, 'You do not have access!'));

    } catch (error) {
      console.log(this.key + this.getDataFromUser)
    }

  }

}
