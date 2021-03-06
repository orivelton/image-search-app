import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from './../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


@Injectable()
export class ImageService {
  private query: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage: any = '&per_page=10';

  constructor (private _http: Http) {}

  getImages(query) {
    return this._http.get(this.URL + query + this.perPage)
    .map(res => res.json());
  }
}
