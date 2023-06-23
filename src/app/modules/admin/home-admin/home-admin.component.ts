import { Component, OnInit } from '@angular/core';
import { BannerGetService } from 'src/app/apis/banner/all/banner-get.service';
import { MeGetService } from 'src/app/apis/me/get/me-get.service';
import { AllVideoService } from 'src/app/apis/videos/all/all-video.service';
import { RedirecLogin } from 'src/app/class/redirect';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css', '../admin.styles.css']
})
export class HomeAdminComponent implements OnInit {

  show = false;
  show_me = false;
  show_vi = false;
  body:any;
  body_me:any;
  body_vi:any;
  image_bg:any;
  image_bg_responsive:any;
  constructor(
    private _ApiBanner: BannerGetService,
    private _ApiMe: MeGetService,
    private _ApiVideos: AllVideoService,
    private _VerificarLogin: RedirecLogin
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarInfoFrase();
    this.MostrarInfoBanner();
    this.MostrarVideos();
    this.VerificarLogin();
  }

  VerificarLogin(){
    this._VerificarLogin.IsLogin();
  }

  MostrarInfoBanner(){
    this._ApiBanner.ALL_GET('?id=1').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;
      this.image_bg = data.body.content[0]['imagen_url'];
      this.image_bg_responsive = data.body.content[0]['imagen_responsive'];
    });
  }

  MostrarInfoFrase(){
    this._ApiMe.GET_SHORT('?id=1').subscribe((data) => {
      this.show_me = true;
      this.body_me = data.body.content;
    });
  }

  MostrarVideos(){
    this._ApiVideos.ALL_GET('?id=ALL').subscribe((data) => {
      this.show_vi = true;
      this.body_vi = data.body.content;
    });
  }

}
