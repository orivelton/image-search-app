import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  images: any[];
  constructor(private _imageService: ImageService) { }

  searchImage(query: string) {
     return this._imageService.getImages(query).subscribe(
       data => console.log(data),
       error => console.log(error),
       () => console.log('Request complete')
     );
  }

  ngOnInit() {
  }

}
