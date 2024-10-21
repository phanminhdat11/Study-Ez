import { Component } from '@angular/core';

import { CalendarComponent } from "../component/calendar.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


}
