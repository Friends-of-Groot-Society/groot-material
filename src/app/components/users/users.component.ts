import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../../models/User';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  userid:string = "0";

  chains: any 
  user: any;
  users: any; 


  constructor(private userService: UserService, private route:ActivatedRoute) {
    // on page load first piece of data
    this.users = this.loadUsers();
  }
  ngOnInit(): void {  
   this.users =  this.loadUsers();
   this.userid = this.route.snapshot.queryParams['id'] || '0';
   this.user = this.loadUser(this.userid);
  }

 
  public loadUser(userid: string) {
    console.log(userid);
return   this.userService.getUser(userid).subscribe((user) => {
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
