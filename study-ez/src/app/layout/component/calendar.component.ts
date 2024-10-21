import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CalendarModule } from "primeng/calendar";

@Component({
    selector: 'component-calendar',
    standalone: true,
    imports: [FormsModule, CalendarModule],
    template:`
        <div class="card flex justify-content-center">
        <p-calendar 
            class="max-w-full" 
            [(ngModel)]="date" 
            [inline]="true" 
            [showWeek]="true" />
    </div>
    `,
    styles:``
    
})
export class CalendarComponent {
    date: Date[] | undefined;
}