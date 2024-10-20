import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApp';

  data: string[] = [];
  size = 6;
  chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  display = false;

  ranNum(max: number) {
    return Math.floor(Math.random() * (max));
  }

  generateData(num: number) {
    for (let i = 0; i < num; i++) {
      let str = "";
      for (let j = 0; j < this.size; j++) {
        str += this.chars.charAt(this.ranNum(this.chars.length));
      }
      this.data[i] = str;
    }
    localStorage.setItem("data", JSON.stringify(this.data));
    this.data = [];
  }

  updateData(num: number) {
    var str_data = localStorage.getItem("data");
    if (str_data !== null) {
      this.data = JSON.parse(str_data);
      if (num > this.data.length) {
        num = this.data.length;
      }
      for (let i = 0; i < num; i++) {
        let str = "";
        for (let j = 0; j < this.size; j++) {
          str += this.chars.charAt(this.ranNum(this.chars.length));
        }
        this.data[i] = str;
      }
      localStorage.setItem("data", JSON.stringify(this.data));
      this.data = [];
    }
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
