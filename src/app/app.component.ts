import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '时间轴';
  time = ['2017-12-10 12:30:00', '2017-12-10 13:30:00', '2017-12-10 14:30:00'];
}