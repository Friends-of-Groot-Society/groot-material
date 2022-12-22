import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  id!: string;
  chains: any 
  user: any;
  users: any;

  ngOnInit(): void {  
    this.user = this.loadUser("0");
   this.users =  this.loadUsers();
  }


  constructor(private userService: UserService) {
    // on page load first piece of data
    this.users = this.loadUsers();
  }
 
  public loadUser(id: string) {
    console.log(id);
return   this.userService.getUser(id).subscribe((user) => {
      this.user = user 
    
    });
    // return this.user;
  }

  public loadUsers() {
    this.users = this.userService.getAllUsers()
      .subscribe((data: any) => {
        if (data != undefined) {
          this.users = data;
          console.log("this.users")
          console.log(this.users);


          // this.usersUpdated.next([...this.users]);
        }
      }); 
  }

}
