import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit { 
  title = 'Groot';
  grootBooks;
  constructor(private bookService: BookService) {
    
      this.grootBooks = this.bookService.getMedias();
   }

  ngOnInit() {
  } 
      // books = this.bookService.getBooks();

}
