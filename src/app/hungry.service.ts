import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HungryService {

  constructor() { }

  /*
** input: comma seperated dish names 
** output: empty string "" if no valid dish names found otherwise,
**          "Enjoy!" if number of dishes less than or equal to 3
**          "Careful" if number of dishes equal to 4
**          "Too much!" if number of dishes greater than or equal to 5
 */
  checkCapacity(dishes: string): string {
    let result = "";

    const numberOfDishes = dishes.trim().split(',').filter(dish => dish.trim().length > 0).length;

    if (numberOfDishes === 0) {
      result = "";
    } else if (numberOfDishes >= 5) {
      result = "Too much!";
    } else if (numberOfDishes === 4) {
      result = "Careful";
    } else {
      result = "Enjoy!";
    }

    return result;
  }
}
