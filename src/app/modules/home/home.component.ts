import { Component, OnInit } from '@angular/core';
import { BannerGetService } from 'src/app/apis/banner/all/banner-get.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apps=false;
  show = false;
  body:any;
  image_bg:any;
  image_bg_responsive:any;

  apiKey: string = 'AIzaSyCI5SKQmgFMYtTb5y9UEGMnhH4jb55hn9w';
  playlistId: string = 'PLslOOJK3qGRnrHATs7yRYl6UL7DMIADov';
  videos: any[] = [];

  constructor(
    private _ApiBanner: BannerGetService
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarInfoBanner();
  }

  MostrarInfoBanner(){
    this._ApiBanner.ALL_GET('?id=1').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;
      this.image_bg = data.body.content[0]['imagen_url'];
      this.image_bg_responsive = data.body.content[0]['imagen_responsive'];
    });
  }
}
