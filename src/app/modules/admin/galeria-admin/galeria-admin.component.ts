import { Component, OnInit } from '@angular/core';
import { GaleriaAllService } from 'src/app/apis/galeria/galeria-all.service';

@Component({
  selector: 'app-galeria-admin',
  templateUrl: './galeria-admin.component.html',
  styleUrls: ['./galeria-admin.component.css', '../admin.styles.css']
})
export class GaleriaAdminComponent implements OnInit {

  show = false;
  body:any;
  constructor(
    private _Api: GaleriaAllService
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.Mostrar();
  }

  Mostrar(){
    this._Api.ALL('?id=ALL').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;
    });
  }

}
