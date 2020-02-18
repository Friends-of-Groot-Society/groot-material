import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-groot',
  templateUrl: './groot.component.html',
  styleUrls: ['./groot.component.css']
})
export class GrootComponent implements OnInit {
  title = 'Groot';
  grootBooks;
  constructor(private bookService: BookService) {
    
      this.grootBooks = this.bookService.getMedias();
   }

  ngOnInit() {
  } 
      // books = this.bookService.getBooks();
      
 


}
