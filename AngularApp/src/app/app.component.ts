import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare function buildData(num: any): any;

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
  display = false;

  generateData(num: any) {
    this.data = buildData(num);
    localStorage.setItem("data", JSON.stringify(this.data));
    this.data = [];
  }

  clearData() {
    this.data = [];
    localStorage.removeItem("data");
    this.display = false;
  }

  displayData() {
    this.display = true;
    var str_data = localStorage.getItem("data");
    if (str_data !== null) {
      this.data = JSON.parse(str_data);
    }
  }
}
