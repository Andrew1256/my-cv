import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';  // Імпорт SidebarComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],  // Додаємо SidebarComponent до імпортів
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Виправлено на styleUrls
})
export class AppComponent {
  title = 'cv';
}
