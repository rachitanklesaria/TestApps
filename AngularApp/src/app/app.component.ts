import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare function buildData(num: any): any;
declare function deleteData(): any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApp';
  data = [];
  generateData(num: any) {
    this.data = buildData(num);
  }

  clearData() {
    this.data = deleteData();
  }
}
