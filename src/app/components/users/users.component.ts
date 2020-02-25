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

    //  this.userService.getUser(22).subscribe(user => this.user = user);
    this.getAllUsers();
  }

 id: number;

 user: User;

 users: User[];

  constructor(private userService: UserService) {
    // on page load first piece of data
  }
 
 public getThisUser(id: number) {
   this.userService.getUser(id).subscribe(user=>this.user = user);
 }
  public getUser() {
    this.userService.getUser(this.id).subscribe(user => this.user = user);
  }

  public getAllUsers() {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }

}
