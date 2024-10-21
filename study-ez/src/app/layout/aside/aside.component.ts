import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  constructor(){

  }
  img_logo= "https://i.pinimg.com/enabled/564x/f1/dd/51/f1dd51ade3ea3696d65506ed04f56725.jpg"
  listMenu = [
    {
      name: "Dashboard",
      icons: "fa fa-home",
    },
    {
      name: "All Courses",
      icons: "fa fa-folder-o"
    },
    {
      name: "Message",
      icons: "fa fa-comment-o"
    },
    {
      name: "Friends",
      icons: "fa fa-user-o"
    },
    {
      name: "Schudule",
      icons: "fa fa-calendar-o"
    },

  ]

}
