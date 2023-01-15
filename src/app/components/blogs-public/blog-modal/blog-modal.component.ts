import { Component, OnInit, Input, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from 'src/app/models/Post';
import { BlogsService } from '../blogs.service';
import { SafeHtmlPipe } from 'src/app/utility/safe-html.pipe';

@Component({
  selector: 'app-blog-modal',
  templateUrl: './blog-modal.component.html',
  styleUrls: ['./blog-modal.component.scss']
})
export class BlogModalComponent implements OnInit {
  modalLoading: boolean = true;
  idFromBlogList: string;
  fromDialog: string;
  blog: Post;

  constructor(
    private blogsService: BlogsService,
    public dialogRef: MatDialogRef<BlogModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

      this.idFromBlogList = data.idValue;
      console.log("this.fromBlogList string-" + this.idFromBlogList);

        this.blogsService.getBlog(this.idFromBlogList).subscribe((response) =>{
          this.modalLoading = false;
          this.blog = response;
          console.log(this.blog);
        })
   }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.fromDialog });
  }
}