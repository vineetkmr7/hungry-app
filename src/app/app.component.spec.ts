import { TestBed, async, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  })

  it('should create the app', () => {
    expect(comp).toBeTruthy();
  });

  it('message should be updated on submit', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    comp.onSubmit();
    expect(comp.message).toBeDefined();
  }));

  it('message should be set to "" on reset', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    comp.message = "Please enter data first";
    comp.onReset();
    expect(comp.message).toBe("");
  }));

  it('message should be "Enjoy!" if number of dishes are less than or equal to 3', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    comp.dishes = "dish1,dish2,dish3";
    comp.onSubmit();
    expect(comp.message).toBe("Enjoy!");
  }))

  it('message should be "Careful" if number of dishes equal to 4', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    comp.dishes = "dish1,dish2,dish3,dish4";
    comp.onSubmit();
    expect(comp.message).toBe("Careful");
  }))

  it('message should be "Too much!" if number of dishes are greater than or equal to 5', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    comp.dishes = "dish1,dish2,dish3,dish4,dish5,dish6";
    comp.onSubmit();
    expect(comp.message).toBe("Too much!");
  }))

  it('should ignore spaces and commas in dishes', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    comp.dishes = "   , ,   ,   ,,,,,, , , , ,dish1,";
    comp.onSubmit();
    expect(comp.message).toBe("Enjoy!");
  }))


});
