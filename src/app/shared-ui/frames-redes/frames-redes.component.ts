import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frames-redes',
  templateUrl: './frames-redes.component.html',
  styleUrls: ['./frames-redes.component.css']
})
export class FramesRedesComponent implements OnInit {
  show:any;
  constructor() { }

  ngOnInit(): void {
    this.show = true;
  }

}
