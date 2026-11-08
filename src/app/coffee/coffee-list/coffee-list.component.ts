import { Component, inject, OnInit, signal } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  imports: [],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css'
})
export class CoffeeListComponent implements OnInit {
  private readonly coffeeService = inject(CoffeeService);

  coffees = signal<Coffee[]>([]);

  ngOnInit(): void {
    this.coffeeService
      .getCoffeeList()
      .subscribe(this.handleCoffees);
  }

  handleCoffees = (coffees: Coffee[]) => this.coffees.set(coffees);
}
