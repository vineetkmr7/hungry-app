import { TestBed } from '@angular/core/testing';

import { HungryService } from './hungry.service';

describe('HungryService', () => {
  let service: HungryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HungryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return "Enjoy!" if number of dishes are less than or equal to 3', () => {
    const dishes = "dish1,dish2,dish3";
    expect(service.checkCapacity(dishes)).toBe("Enjoy!");
  })

  it('should return "Careful" if number of dishes equal to 4', () => {
    const dishes = "dish1,dish2,dish3,dish4";
    expect(service.checkCapacity(dishes)).toBe("Careful");
  })

  it('should return "Too much!" if number of dishes are greater than or equal to 5', () => {
    const dishes = "dish1,dish2,dish3,dish4,dish5,dish6";
    expect(service.checkCapacity(dishes)).toBe("Too much!");
  })

  it('should ignore spaces and commas in dishes', () => {
    const dishes = "   , ,   ,   ,,,,,, , , , ,dish1,";
    expect(service.checkCapacity(dishes)).toBe("Enjoy!");
  })

  it('should return empty string if dishes are empty', () => {
    const dishes = "   , ,   ,   ,,,,,, , , , ,,";
    expect(service.checkCapacity(dishes)).toBe("");
  })
});
