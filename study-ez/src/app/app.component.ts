import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from './layout/aside/aside.component';
import { HomeComponent } from './core/home/home.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { GroupComponent } from './layout/component/group.component';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsideComponent, HomeComponent, SidebarComponent, GroupComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'study-ez';
  
}
