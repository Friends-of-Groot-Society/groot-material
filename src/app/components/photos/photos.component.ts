import { Component, OnInit } from '@angular/core'; 
import { GrootService } from '../../services/groot.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent implements OnInit {
  photos;
  albumId;
  constructor(
    private grootService: GrootService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.albumId = this.route.snapshot.params.albumId;
    this.photos = this.grootService.getPhotos(this.albumId);
  }

}
