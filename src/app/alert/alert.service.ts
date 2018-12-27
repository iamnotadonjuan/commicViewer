import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable()
export class AlertService {

  constructor(public alertContoller: AlertController) {}
  /**
   * 
   * @param header - string. The text that will appear in the header of the popup.
   * @param subHeader - string. The text that will appear at the bottom of the header.
   * @param message - string. The text that will appear in the body of the popup.
   * @param buttons - Array of strings. Every item describe de type of button thath will appear.
   */
  async presentAlert (header = 'hey', subHeader = '', message, buttons = ['OK']) {
    const alert = await this.alertContoller.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: buttons
    })
    await alert.present()
  }
}
