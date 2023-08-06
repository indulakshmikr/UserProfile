import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  constructor(private userservice: UserService, private router: Router) {}

  users: any= [];

  ngOnInit() {
    this.getUsers();
  }

   getUsers() {
      this.userservice.getUsers().subscribe((res)=>{
        this.users = res;
        console.log(this.users)
    })  
  }

  onIconClick(userId:any){
    console.log(userId)
    this.router.navigate([`/user/${userId}`])
  }
}
