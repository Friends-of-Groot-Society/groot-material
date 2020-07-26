import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { first } from 'rxjs/operators'; 
import { User } from '../../models/User';
import { UserService, AuthenticationService } from '../../services';

@Component({
  selector: 'app-groot',
  templateUrl: './groot.component.html',
  styleUrls: ['./groot.component.css']
})
export class GrootComponent implements OnInit {
  currentUser: User;
  id: number; 
  user: User;
  users = [];

  title: string = 'Groot';

  grootImage: string = 'https://friends-of-groot-society.s3.amazonaws.com/assets/android-chrome-384x384.png';

  grootSmallImage: string = 'https://friends-of-groot-society.s3.amazonaws.com/assets/android-chrome-192x192.png';

  grootBooks;
  constructor(
    private bookService: BookService,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
    this.grootBooks = this.bookService.getMedias();
  }

  ngOnInit() {
    this.loadAllUsers();
  }
   public getThisUser(id: number) {
   this.userService.getUser(id).subscribe(user=>this.user = user);
 }
  // books = this.bookService.getBooks(); 
  deleteUser(id: number) {
    this.userService.delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.userService.getAllUsers()
      .pipe(first())
      .subscribe(users => this.users = users);
  }


}
