import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  private apiKey = '6c3261ac60d017c843e329adb1b9ce14';
  private apiUrl = 'https://api.flickr.com/services/rest/';

  constructor(private http: HttpClient) { }

  getAlbum(albumId: string) {
    const url = `${this.apiUrl}?method=flickr.photosets.getPhotos&api_key=${this.apiKey}&photoset_id=${albumId}&format=json&nojsoncallback=1`;

    return this.http.get(url);
  }
}
