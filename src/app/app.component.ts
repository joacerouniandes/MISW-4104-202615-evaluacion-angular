import { Component } from '@angular/core';
import { CoffeeListComponent } from './coffee/coffee-list/coffee-list.component';

@Component({
  selector: 'app-root',
  imports: [CoffeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
