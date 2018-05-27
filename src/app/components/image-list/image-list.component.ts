import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../shared/image.service';
@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  constructor(private _imageService: ImageService) { }
  /**
   * Function for success result
   * @param data Success
   */
  handleSuccess(data) {
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }
  /**
   * Function for error result
   * @param data Error
   */
  handleError(error) {
    console.log(error);
  }
  /**
   * Featch API
   */
  searchImage(query: string) {
    this.searching = true;
     return this._imageService.getImages(query).subscribe(
       data => this.handleSuccess(data),
       error => this.handleError(error),
       () => this.searching = false
     );
  }

  ngOnInit() {}
}
