import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { UserService } from 'src/app/service/user.service';




@Component({
  // selector: 'app-product-list', removed becuase it will no longer be used as a directive - Will be used in routing
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  employees!: Employee[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends(){

    this.userService.getInfo().subscribe(
        response=> {
          this.employees=response;
      }

     );


    }


}
