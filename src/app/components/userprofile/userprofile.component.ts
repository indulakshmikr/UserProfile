import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {
  userId: number = -1;
  user: any;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = parseInt(params['userId'])
      this.getUserDetails();
    });
  }

  getUserDetails() {
    this.userService.getUserById(this.userId).subscribe(user=> {
      this.user = user;
    });
  }
}
