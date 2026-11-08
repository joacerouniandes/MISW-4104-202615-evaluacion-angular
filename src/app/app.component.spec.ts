import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CoffeeListComponent } from './coffee/coffee-list/coffee-list.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-coffee-list',
  template: ''
})
class MockCoffeeListComponent {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    })
      .overrideComponent(
        AppComponent,
        {
          remove: {
            imports: [CoffeeListComponent]
          },
          add: {
            imports: [MockCoffeeListComponent]
          }
        }
      )
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should has the title "El aroma mágico"', () => {
    const fixture = TestBed.createComponent(AppComponent);

    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('El aroma mágico');
  });

  it('should has the footer "Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico"', () => {
    const fixture = TestBed.createComponent(AppComponent);

    expect(fixture.nativeElement.querySelector('footer').textContent).toContain('Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico');
  });
});
