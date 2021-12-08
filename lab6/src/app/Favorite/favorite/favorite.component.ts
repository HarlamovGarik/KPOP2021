import { Component, OnInit } from '@angular/core';

import {DBService} from '../../services/db.service'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {

  constructor(private DBService: DBService) {
    DBService.getValue()
  }
  test(object:any){
    this.DBService.TestStorage(object)
  }

  ngOnInit() {}

}
