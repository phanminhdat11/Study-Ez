import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { GroupComponent } from "../../layout/component/group.component";
import { SubjectComponent } from "../../layout/component/subject.component";
import { SearchComponent } from '../component/search.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { AsideComponent } from '../../layout/aside/aside.component';
import { DropdownComponent } from "../component/dropdown.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GroupComponent, SubjectComponent, SearchComponent, NgClass, AsideComponent, DropdownComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {

  }
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
  img_logo= "https://i.pinimg.com/enabled/564x/f1/dd/51/f1dd51ade3ea3696d65506ed04f56725.jpg"

  dataStudy = [
    {
      name: "Toan"
    }
  ]
  isSidebarOpen = false;

  // Toggle trạng thái sidebar
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
}

