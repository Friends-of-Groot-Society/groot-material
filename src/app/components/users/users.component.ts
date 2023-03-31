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
 
  email:string = "";

  
  chains: any 
  user: User;
  users: any; 



  constructor(private userService: UserService, private route:ActivatedRoute) {
    // on page load first piece of data 
  }
  ngOnInit(): void {   
   this.email = this.route.snapshot.queryParams['email'];
   this.user = this.loadUser(this.email);
   console.log("email "+this.email);
 
  }

 
  public loadUser(email: string) {  
  this.userService.getUser(email).subscribe((u) => {

    return this.user = u
    
    });
    return this.user;
  } 

}
