import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalVideoComponent } from '../modal-video/modal-video.component';
import { AllVideoService } from 'src/app/apis/videos/all/all-video.service';
import { MeGetService } from 'src/app/apis/me/get/me-get.service';

@Component({
  selector: 'app-about-wg',
  templateUrl: './about-wg.component.html',
  styleUrls: ['./about-wg.component.css']
})
export class AboutWgComponent implements OnInit {
  videos:any ;
  me_short:any;
  show = false;
  show_me = false;
  
  constructor(
    private modalService: NgbModal,
    private _ApiAllVideo: AllVideoService,
    private _ApiGetMeShort: MeGetService,
  ) { }

  ngOnInit(): void {
    this.VerTodosLosVideos();
    this.ObtenerInfoCorta();
  }

  VerTodosLosVideos(){
    this._ApiAllVideo.ALL_GET('?id=ALL').subscribe((data) => {
      this.show = true;
      this.videos = data.body.content;
    });
  }

  ObtenerInfoCorta(){
    this._ApiGetMeShort.GET_SHORT('?id=1').subscribe((data) => {
      this.show_me = true;
      this.me_short = data.body.content;
    });
  }

  open_video_modal(url_video:any) {
    const modalRef = this.modalService.open(ModalVideoComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.data = {
      url: url_video,
      video: true
    };
  }

}
