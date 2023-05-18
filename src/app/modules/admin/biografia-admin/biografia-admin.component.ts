import { Component, OnInit } from '@angular/core';
import { BiografiaService } from 'src/app/apis/biografia/get/biografia.service';

@Component({
  selector: 'app-biografia-admin',
  templateUrl: './biografia-admin.component.html',
  styleUrls: ['./biografia-admin.component.css', '../admin.styles.css']
})
export class BiografiaAdminComponent implements OnInit {

  show = false;
  body:any;

  constructor(
    private _ApiBiografia: BiografiaService
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarInfo();
  }

  MostrarInfo(){
    this._ApiBiografia.ALL_GET('?id=1').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;
    });
  }
}
