import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  isVisible: boolean = true;
  showTemplate: boolean = false;
  isLoading: boolean = false;
  isActive: boolean = false;
  
  students = [
    { id: 1, name: 'Bảo', age: 22 },
    { id: 2, name: 'Bo', age: 21 },
    { id: 3, name: 'Ảo', age: 20 },
    { id: 4, name: 'B', age: 23 },
  ];
  phones = [
    { id: 1, name: 'phone 1', category: 'iphone' },
    { id: 2, name: 'phone 2', category: 'samsung' },
    { id: 3, name: 'phone 3', category: 'iphone' },
    { id: 4, name: 'phone 4', category: 'nokia' },
    { id: 5, name: 'phone 5', category: 'samsung' },
    { id: 6, name: 'phone 6', category: 'iphone' },
    { id: 7, name: 'phone 7', category: 'xiaomi' },
    { id: 8, name: 'phone 8', category: 'samsung' },
    { id: 9, name: 'phone 9', category: 'iphone' },
    { id: 10, name: 'phone 10', category: 'xiaomi' },
  ]

  statuses: string[] = ['Hoạt động', 'Không hoạt động', 'Chờ xử lý'];
  color: string = '';
  username: string = '';

  getClass(status: string) {
    return {
      'text-success': status === 'Hoạt động',
      'text-danger': status === 'Không hoạt động',
      'text-warning': status === 'Chờ xử lý'
    };
  }
}