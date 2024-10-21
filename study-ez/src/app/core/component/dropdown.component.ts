import { NgClass } from "@angular/common";
import { Component } from "@angular/core";


@Component({
    selector:"component-dropdown",
    standalone: true,
    imports:[NgClass],
    template:`
<div class="flex">
  <!-- Nút để toggle sidebar -->
    <div (click)="toggleSidebar()"  class="flex justify-center items-center h-[50px] w-[50px] bg-blue-400 rounded-2xl mb-5 text-white text-[25px]">
        <i class="fa fa-bars" aria-hidden="true"></i>
    </div>

  <!-- Sidebar menu -->
  <div  [ngClass]="{'-translate-x-full': !isSidebarOpen, 'translate-x-0': isSidebarOpen}" 
       class="fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-md transform transition-transform duration-300 ease-in-out z-50">
    <ul class="p-4">
      <li class="py-2">
        <a href="#" class="flex items-center space-x-2">
          <span class="material-icons">home</span>
          <span>Dashboard</span>
        </a>
      </li>
      <li class="py-2">
        <a href="#" class="flex items-center space-x-2">
          <span class="material-icons">folder</span>
          <span>All Courses</span>
        </a>
      </li>
      <li class="py-2">
        <a href="#" class="flex items-center space-x-2">
          <span class="material-icons">message</span>
          <span>Message</span>
        </a>
      </li>
      <li class="py-2">
        <a href="#" class="flex items-center space-x-2">
          <span class="material-icons">group</span>
          <span>Friends</span>
        </a>
      </li>
      <li class="py-2">
        <a href="#" class="flex items-center space-x-2">
          <span class="material-icons">event</span>
          <span>Schedule</span>
        </a>
      </li>
      <li class="py-2">
        <a href="#" class="flex items-center space-x-2">
          <span class="material-icons">settings</span>
          <span>Settings</span>
        </a>
      </li>
      <li class="py-2">
        <a href="#" class="flex items-center space-x-2 text-gray-300 cursor-not-allowed">
          <span class="material-icons">error</span>
          <span>Directory</span>
        </a>
      </li>
    </ul>
</div>
</div>

`,
    styles:``
})

export class DropdownComponent {
    isSidebarOpen = false;

    // Toggle trạng thái sidebar
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
}