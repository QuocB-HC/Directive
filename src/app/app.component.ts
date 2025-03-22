import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  isVisible = true;
  items = [
    {id: 1, name: 'Bảo', age: 22},
    {id: 2, name: 'Bo', age: 21},
    {id: 3, name: 'Ảo', age: 20},
    {id: 4, name: 'B', age: 23},
  ];
  color = '';
  showTemplate = false;
  isLoading = false;
}