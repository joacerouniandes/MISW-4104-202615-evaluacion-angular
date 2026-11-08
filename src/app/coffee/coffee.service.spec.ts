import { TestBed } from '@angular/core/testing';

import { CoffeeService, URL } from './coffee.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Coffee } from './coffee';

describe('CoffeeService', () => {
  let service: CoffeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(CoffeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the actors from the backend', () => {
    const coffees: Coffee[] = [
      new Coffee(
        1,
        'Mi café preferido',
        'Blend',
        'América',
        'Natural',
        1870,
        'http://example.com/example.jpg'
      ),
      new Coffee(
        2,
        'Café de Colombia',
        'Café de Origen',
        'Lagos',
        'Frutal',
        1597,
        'http://example.com/example2.jpg'
      )
    ];
    let result: Coffee[] = [];

    service.getCoffeeList().subscribe((data) => (result = data));

    const req = httpMock.expectOne(URL);
    expect(req.request.method).toBe('GET');
    req.flush(coffees);
    expect(result).toEqual(coffees);
  });
});
