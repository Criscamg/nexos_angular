import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NexosMercanciaComponent } from './nexos-mercancia/nexos-mercancia.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NexosMercanciaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nexos-app';
}
