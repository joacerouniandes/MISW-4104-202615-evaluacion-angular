import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListComponent } from './coffee-list.component';
import { CoffeeService } from '../coffee.service';
import { of } from 'rxjs';
import { Coffee } from '../coffee';

const coffees = [
  new Coffee(1, 'Cafe 1', 'Blend', 'Mi región 1', 'Natural', 1234, 'http://example.com/example.png'),
  new Coffee(2, 'Cafe 2', 'Café de Origen', 'Mi región 2', 'Natural', 12345, 'http://example.com/example2.png'),
  new Coffee(3, 'Cafe 3', 'Blend', 'Mi región 3', 'Frutal', 87945, 'http://example.com/example3.png')
];

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeListComponent],
      providers: [
        {provide: CoffeeService, useValue: {getCoffeeList: () => of(coffees)}}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has a table head with #, Nombre, Tipo, Region', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table thead th:nth-child(1)')?.textContent).toEqual('#');
    expect(compiled.querySelector('table thead th:nth-child(2)')?.textContent).toEqual('Nombre');
    expect(compiled.querySelector('table thead th:nth-child(3)')?.textContent).toEqual('Tipo');
    expect(compiled.querySelector('table thead th:nth-child(4)')?.textContent).toEqual('Región');
  });

  it('should has three coffees', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const rows = compiled.querySelectorAll('table tbody tr');
    expect(rows).toHaveSize(coffees.length);

    compiled.querySelectorAll('table tbody tr')
      .forEach((tr, key) => {
        expect(tr.querySelector('td:nth-child(1)')?.textContent).toEqual(`${coffees[key].id}`);
        expect(tr.querySelector('td:nth-child(2)')?.textContent).toEqual(coffees[key].nombre);
        expect(tr.querySelector('td:nth-child(3)')?.textContent).toEqual(coffees[key].tipo);
        expect(tr.querySelector('td:nth-child(4)')?.textContent).toEqual(coffees[key].region);
      });
  });

  it('should show "Total café de origen: 1" y "Total café blend: 2"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('[data-test="origin"]')?.textContent).toEqual('Total café de origen: 1');
    expect(compiled.querySelector('[data-test="blend"]')?.textContent).toEqual('Total café blend: 2');
  });
});
