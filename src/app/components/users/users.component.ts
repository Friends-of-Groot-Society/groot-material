import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  

  ngOnInit(): void { 
    // throw new Error("Method not implemented.");
  }

  public id: number;

  public user: User;

  public users: User[];

  constructor(private userService: UserService) {
    // on page load first piece of data
     this.userService.getUser(1).subscribe(user => this.user = user);
  }

  public getUser() {
    this.userService.getUser(this.id).subscribe(user => this.user = user);
  }

  public getAllUsers() {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }

}
