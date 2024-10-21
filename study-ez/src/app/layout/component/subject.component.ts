import { NgClass, NgFor } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
    selector: 'component-subject',
    standalone: true,
    imports: [NgFor,NgClass],
    template: `
    
    <swiper-container class="mySwiper h-[400px] w-auto" scrollbar="true" direction="vertical" slides-per-view="auto" free-mode="true"
    mousewheel="true">
        <swiper-slide  class="h-[250px]" *ngFor="let item of data">
      
            <div class="flex flex-col justify-center items-start overflow-hidden">
                <div
                    class="relative flex items-center p-6 rounded-3xl shadow-lg  laptop:w-[700px]  h-[220px] bg-gradient-to-r hover:bg-purple-100 hover:text-slate-700 transition ease-in-out cursor-pointer " [ngClass]="item.bg_color">
                    <div class="w-1/3">
                        <img class="w-full" src="{{item.decriptionSubject.img_url}}" alt="Operating System">
                    </div>

                    <div class="w-2/3 pl-6 text-black" >
                        <h2 class="text-2xl font-bold ">{{item.nameSubject}}</h2>
                        <p class="mt-2 hidden laptop:block ">{{item.decriptionSubject.decription}}</p>
                        <p class="mt-4">
                            Created by <span class="font-bold">{{item.directorBy}}</span>
                        </p>
                    </div>
                    <div
                        class="absolute bottom-4 right-4 flex items-center justify-center w-12 h-12 bg-purple-200 rounded-full dark:hover:bg-purple-400 hover:scale-125 transition ease-in-out cursor-pointer">
                        <i class="fa fa-angle-right text-2xl" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper-container>
    
 



  
  `,
    styles: ``,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SubjectComponent {
    data = [
        {
            nameSubject: "Data Structure",
            directorBy: "Teacher Nguyen",
            decriptionSubject: {
                img_url: "https://cdni.iconscout.com/illustration/premium/thumb/data-structure-illustration-download-in-svg-png-gif-file-formats--server-cloud-backup-upload-management-pack-business-illustrations-5453704.png?f=webp",
                decription: "Nếu không cần lặp và chỉ muốn hiển thị thông tin trong object, bạn không cần dùng *ngFor, chỉ cần truy cập các thuộc tính trực tiếp:"
            },
            bg_color: "bg-purple-50"
        },
        {
            nameSubject: "OOP",
            directorBy: "Teacher Nguyen",
            decriptionSubject: {
                img_url: "https://cdni.iconscout.com/illustration/premium/thumb/cloud-storage-illustration-download-in-svg-png-gif-file-formats--customer-subscription-data-sharing-digital-virtual-pack-business-illustrations-5453716.png?f=webp",
                decription: "Nếu không cần lặp và chỉ muốn hiển thị thông tin trong object, bạn không cần dùng *ngFor, chỉ cần truy cập các thuộc tính trực tiếp:"
            },
            bg_color: "from-blue-500 to-blue-300 ",
        },
        {
            nameSubject: "OOP",
            directorBy: "Teacher Nguyen",
            decriptionSubject: {
                img_url: "https://cdni.iconscout.com/illustration/premium/thumb/cloud-storage-illustration-download-in-svg-png-gif-file-formats--customer-subscription-data-sharing-digital-virtual-pack-business-illustrations-5453716.png?f=webp",
                decription: "Nếu không cần lặp và chỉ muốn hiển thị thông tin trong object, bạn không cần dùng *ngFor, chỉ cần truy cập các thuộc tính trực tiếp:"
            },
            bg_color: "bg-yellow-400"
        }
    ]

}


