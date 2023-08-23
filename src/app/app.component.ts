import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  buttonTitle: string = 'In the biningin';
  @Input() valueOne: string = '';
  @Input() valueTwo: string = '';
}
