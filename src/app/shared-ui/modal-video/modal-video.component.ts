import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.css']
})
export class ModalVideoComponent implements OnInit {

  data: any;
  video_SafeResourceUrl?: SafeResourceUrl;
  constructor(public modal: NgbActiveModal, public sanitizer: DomSanitizer,  ) {

  }

  ngOnInit() {
    this.video_SafeResourceUrl= this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.data.url);
  }
}
