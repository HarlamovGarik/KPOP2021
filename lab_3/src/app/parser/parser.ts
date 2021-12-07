import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'parser',
  templateUrl: 'parser.html',
  styleUrls: ['json_result.css']
})

export class MyParser {
  json_result: any
  click_button: boolean = false
  cancel = false
  date: any[] = []
  bucket: any[] = []

  constructor(private http: HttpClient) {
  }

  Parsing() {
    this.json_result = this.http.get("http://jsonplaceholder.typicode.com/posts").subscribe((json_result) => (this.json_result = json_result));
    if (this.json_result) {
      this.click_button = true
    }
    // console.log(this.json_result)
  }
  addValueToBucket(date: string[]){
    this.bucket.push(date)
  }

  PopUpText(date: any[]) {
    this.date = date
    this.ClickCancel()
  }

  ClickCancel() {
    this.cancel = !this.cancel
  }
}
