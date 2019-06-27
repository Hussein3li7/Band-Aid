import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ApiServiseProvider } from '../../providers/api-servise/api-servise'
import { Observable } from 'rxjs';
import { NewStationsModel, NewStateModel } from '../../Model/NewState'
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  defulatView: string = "NewState"

  NewStateArray: Observable<NewStateModel[]>
  GetnewStateData: AngularFireObject<any>;
  GetnewStationsData: AngularFireObject<any>;
  NewStateFullData = []
  newStateSmallData = []
  NewStationsFullData = []
  newStationsSmallData = []
  constructor(public navCtrl: NavController, public navParams: NavParams, public ApiPro: ApiServiseProvider, public db: AngularFireDatabase, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.getNewState()
    this.getNewStations()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');

  }


  ShowState(defulatView) {

    this.defulatView = defulatView

  }

  getNewState() {

    this.presentLoading()

    this.GetnewStateData = this.db.object('newState');
    this.GetnewStateData.snapshotChanges().subscribe(action => {

      if (action.payload.val() == null || action.payload.val() == undefined) {
        console.log('no data')
      } else {

        this.NewStateFullData.push(action.payload.val())
        this.newStateSmallData = Object.entries(this.NewStateFullData[0])

        console.log(this.NewStateFullData)
        console.log(this.newStateSmallData)
      }

    });

  }
  getNewStations() {
    this.GetnewStationsData = this.db.object('StationsAddedByUser');
    this.GetnewStationsData.snapshotChanges().subscribe(action => {

      if (action.payload.val() == null || action.payload.val() == undefined) {
        console.log('no data')
      } else {

        this.NewStationsFullData.push(action.payload.val())
        this.newStationsSmallData = Object.entries(this.NewStationsFullData[0])

        console.log(this.NewStationsFullData)
        console.log(this.newStationsSmallData)
      }

    });

  }


  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000,
    });
    loader.present();
  }


  showConfirmAddState(StateName:string , ExplainState:string) {
    const confirm = this.alertCtrl.create({
      title: StateName,
      message: ExplainState,
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  showConfirmAddStations(StateName:string , ExplainState:string,PublisherName:string) {
    const confirm = this.alertCtrl.create({
      title: StateName,
      message: ExplainState,
      subTitle:PublisherName,
      buttons: [
        {
          text: 'حذف',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'اظافة',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }


}













