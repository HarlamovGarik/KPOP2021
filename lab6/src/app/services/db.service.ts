import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import {data} from "../model/data.model";




@Injectable({
  providedIn: 'root'
})
export class DBService {

  public favorite:data[] = []




  private addFavorite(keys){
    this.favorite = []
    console.log(this.favorite)
    for(var i=0 ; i< keys.length;i++){
      this.storage.get(keys[i]).then((val) => {
        this.favorite.push(val)
      });
    }
  }


  public TestStorage(object:data){
    this.storage.set(object.id, object)
  }

  public getValue(){
    console.log(this.storage.keys().then(value => {
      this.addFavorite(value)
    }))
  }

  public clearStorage(){
    this.storage.clear()
  }

  constructor(private storage: Storage) {
    // this.getValue()

  }
}
