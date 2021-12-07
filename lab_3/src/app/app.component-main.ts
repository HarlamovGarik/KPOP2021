import {Component} from '@angular/core';

@Component({
  selector: 'app-main-block',
  templateUrl: './app.component-main.html',
  styleUrls: ['./app.component.css']
})

export class AppComponentMain{
  name:string = "Tom"
  a:number = 0
  b:number = 0
  c:number = 0

  solve_1:number = 0
  solve_2:number = 0

  variables:boolean = false
  CheckVariable(){
    if (Math.abs(this.a)+Math.abs(this.b)+Math.abs(this.c) > 0 ){
      this.variables = true
    }
  }
  Solve(){
    let D:number;

    D = Math.pow(this.b,2)-4*this.a*this.c

    if(D>0){
      D = Math.sqrt(D)
      console.log(D)
      this.solve_1 = (-this.b - D)/(2*this.a)
      this.solve_2 = (-this.b + D)/(2*this.a)
      console.log(this.solve_1)
      console.log(this.solve_2)
      // return [this.solve_1, this.solve_2]
    }else {
      console.log("Дискриминант < 0")
      // return false
    }

  }
}
