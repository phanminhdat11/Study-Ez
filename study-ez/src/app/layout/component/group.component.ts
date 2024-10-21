import { NgClass, NgFor } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";



@Component({
  selector: "component-group",
  standalone: true,
  imports: [NgFor, NgClass],
  template: `
<swiper-container class="mySwiper overflow-hidden tablet:"  pagination="true" pagination-clickable="true" 
    slides-per-view="2.5" free-mode="true">
    <swiper-slide *ngFor="let item of data" class="items-center justify-between space-x-6 h-[240px] tablet:flex">
  
      <div class=" bg-gradient-to-r rounded-xl p-6 shadow-lg w-[220px] hover:scale-110 transition cursor-pointer"
            [ngClass]="item.bg_color">
            <h3 class="text-white font-semibold text-lg">{{item.title}}</h3>
            <div class="flex items-center mt-4">
                <div class="flex -space-x-2">
                    <img class="w-8 h-8 rounded-full border-2 border-white" [src]="item.img_users[0]" alt="User 1">
                    <img class="w-8 h-8 rounded-full border-2 border-white" [src]="item.img_users[1]" alt="User 2">
                    <div
                        class="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-500 border-2 border-white">
                        +{{item.users}}
                    </div>
                </div>
            </div>
            <div class="flex items-center mt-6 text-white">
                <i class="fa fa-folder mr-2"></i>
                <span class="text-sm">{{item.attached}} Files</span>
            </div>
            <div class="flex items-center mt-2 text-white">
                <i class="fa fa-user mr-2"></i>
                <span class="text-sm">Teacher: {{item.admin}}</span>
            </div>
      </div>

    </swiper-slide>
</swiper-container>


    `,
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class GroupComponent {
  data = [
    {
      title: "ENGLISH - UNIT II",
      attached: 20,
      admin: "Minh Nguyen",
      img_users: [
        "https://danviet.mediacdn.vn/296231569849192448/2024/9/15/hieuthuhai-21-1726393385094-17263933892862089575475.jpg",
        "https://i.namu.wiki/i/Dn8Ru_l20CGUa1kSD2HIM-maGjWHnQCQMQLJRY1j8BKSiwxQdWWZaRw2mnXXV2FsLLEXxMyEHah3rbMODGVXBA.webp"
      ],
      bg_color: "from-blue-500 to-blue-300 ",
      users: 2,

    },
    {
      title: "MATH - UNIT II",
      attached: 10,
      admin: "Trung Tin",
      img_users: [
        "https://cdn.tuoitre.vn/zoom/700_700/471584752817336320/2023/6/2/isaac-trong-chuong-trinh-hanh-trinh-ruc-ro-16856658565711965613357-600-0-1647-2000-crop-1685666480964586590821.jpg",
        "https://i.namu.wiki/i/Dn8Ru_l20CGUa1kSD2HIM-maGjWHnQCQMQLJRY1j8BKSiwxQdWWZaRw2mnXXV2FsLLEXxMyEHah3rbMODGVXBA.webp"
      ],
      bg_color: "from-red-500 to-red-300",
      users: 5,

    },
    {
      title: "EXAM - 20",
      attached: 11,
      admin: "Tran Tran",
      img_users: [
        "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--9d89b5aa-12f4-4a3c-b07d-d6e76055595b/_422962758142.app.webp?preferwebp=true&width=312",
        "https://baobariavungtau.com.vn/dataimages/202105/original/images1657435_8M_1.jpg"
      ],
      bg_color: "from-green-600 to-green-300",
      users: 2,

    },
    {
      title: "MATH - UNIT II",
      attached: 10,
      admin: "Trung Tin",
      img_users: [
        "https://cdn.tuoitre.vn/zoom/700_700/471584752817336320/2023/6/2/isaac-trong-chuong-trinh-hanh-trinh-ruc-ro-16856658565711965613357-600-0-1647-2000-crop-1685666480964586590821.jpg",
        "https://i.namu.wiki/i/Dn8Ru_l20CGUa1kSD2HIM-maGjWHnQCQMQLJRY1j8BKSiwxQdWWZaRw2mnXXV2FsLLEXxMyEHah3rbMODGVXBA.webp"
      ],
      bg_color: "from-red-500 to-red-300",
      users: 5,

    },
  ]

}