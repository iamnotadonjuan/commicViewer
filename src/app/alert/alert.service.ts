import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable()
export class AlertService {

  constructor(public alertContoller: AlertController) {}

  async presentAlert (header = 'hey', subHeader = '', message, buttons = ['OK']) {
    console.log('hey', buttons)
    const alert = await this.alertContoller.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: buttons
    })
    await alert.present()
  }
}
