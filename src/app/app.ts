import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstPage } from "./first-page/first-page";

@Component({
  selector: 'app-root',
  imports: [FirstPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('khushbu-portfolio');
}
