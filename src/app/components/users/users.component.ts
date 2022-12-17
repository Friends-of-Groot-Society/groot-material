import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
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
    this.users = this.loadUsers(); 
  }

 id!: string;
chains: any
 user: User = new User;

 users:any;

  constructor(private userService: UserService) {
    // on page load first piece of data
    this.loadUser("0");
 this.loadUsers();
  }
 
  public loadUser(id:string) {
    this.userService.getUser(id).subscribe((user) => {  
      this.user = user
    });
  }

  public loadUsers() {
   this.users =  this.userService.getAllUsers()
    .subscribe((data: any) => {
      if (data != undefined) {
        this.users = data;
        console.log("this.users")
        console.log(this.users);
    
 
        // this.usersUpdated.next([...this.users]);
      }
    });
    // .subscribe((users) => { 
    //   console.log(users);
    //   this.users = users
    // });
  }

}
