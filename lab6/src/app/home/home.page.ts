import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {data} from "../model/data.model";
import {AlertController} from "@ionic/angular";

import {DBService} from '../services/db.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  json_result: any
  click_button: boolean = false

   result:data[] = []

  constructor(private http: HttpClient,public alertCtrl: AlertController,private DBService: DBService ) {

    this.DBService.clearStorage()

  }
  async showAlert(object:any) {
    const alert = await this.alertCtrl.create({
      header: 'Information User',
      message: "Id:"+ object.id +" " +"Title:" +  object.title+" " +
        "Body:" +" " +  object.body,
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
  test(object:any){
    this.DBService.TestStorage(object)
  }
  Parsing() {
    this.json_result = this.http.get("http://jsonplaceholder.typicode.com/posts").subscribe(
      (json_result) => {
        this.json_result = json_result
        // for(var i of this.json_result){
        //   this.result.push(new data(this.i.id,this.json_result.title,this.json_result.body))
        // }le
        this.json_result.forEach(function (element){
          let object = new data(element.id, element.title, element.body)

        });
        for (let i = 0; i < this.json_result.length; i++) {
          let object = new data(this.json_result[i].id, this.json_result[i].title,
            this.json_result[i].body)
          this.result.push(object)
        }
        if (this.json_result) {
          this.click_button = true
        }
      });


    // if (this.json_result) {
    //   this.click_button = true
    // }
    // console.log(this.json_result)
  }

}
