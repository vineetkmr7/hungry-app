import { Component } from '@angular/core';
import { HungryService } from './hungry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  dishes: string = "";
  message: string = "";

  constructor(private _hungryService: HungryService){}

  onSubmit() {
    const result = this._hungryService.checkCapacity(this.dishes);
    if (result === "") {
      this.message = "Please enter data first";
    } else {
      this.message = result;
    }
  }

  onReset() {
    // this.dishes = "";
    this.message = "";
  }

}
