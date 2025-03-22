import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-template-example',
  standalone: false,
  templateUrl: './ng-template-example.component.html',
  styleUrl: './ng-template-example.component.css'
})
export class NgTemplateExampleComponent {
  @Input() template: any;
}
