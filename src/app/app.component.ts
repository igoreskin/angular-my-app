import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  sentence: string="This is a test sentence";
  calc: number=100/4;
  getTitle(): string {
    return this.title
  }
  numbers(a, b): number {
    return a * b
  }
}
