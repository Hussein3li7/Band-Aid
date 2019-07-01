import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, AlertController, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { ApiServiseProvider } from '../../providers/api-servise/api-servise'

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
    PulisherName: '',
    key: ''
  }
  showEditeButton: boolean = false;

  constructor(public navParams: NavParams, private ViewCtr: ViewController, public alertContrl: AlertController, private Modal: ModalController, public db: AngularFireDatabase, public auth: AngularFireAuth, public ApiAuth: ApiServiseProvider) {
 
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
    this.StateDataObj.PulisherName = ArrayGotData['PulisherName']
    this.StateDataObj.key = ArrayGotData['key']

    try {
          
    if (this.ApiAuth.AuthState == true) {

      if (this.auth.auth.currentUser.email == this.StateDataObj.PulisherName) {
        this.showEditeButton = true
      } else {
        this.showEditeButton = false
      }
    } else {
      this.showEditeButton = false
    }
    } catch (error) {
      return error
    }
 
  }

  openModal() {

    const myModalData = {
      StateName: this.StateDataObj.Title,
      ExplainState: this.StateDataObj.ExplainState,
      symptoms: this.StateDataObj.symptoms,
      PulisherName: this.StateDataObj.PulisherName,
      key: this.StateDataObj.key
    }

    const myModal = this.Modal.create('EditFormPage', { Data: myModalData })

    myModal.present()


  }


  DeleteState() {

    this.ShowDeleteAlert()

  }


  ShowDeleteAlert() {
    let Confirm = this.alertContrl.create({
      title: 'تنبيه',
      subTitle: 'حذف',
      buttons: [{
        text: 'نعم',
        handler: data => {

          try {

            let DataObj = this.db.list('ConfirmedState')

            DataObj.remove(this.StateDataObj.key).then(() => {
              this.ViewCtr.dismiss()
            })
              .catch(err => alert('خطا اثناء عملية الحدف'));

          } catch (error) {
            alert("حصل خطا اثناء الحذف")
          }

        }
      }, {
        text: 'لا',
        handler: data => {
          return
        }
      }

      ]
    }

    )
    Confirm.present()
  }



}
