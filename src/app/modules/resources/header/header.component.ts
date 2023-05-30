import { Component, OnInit } from '@angular/core';
import { GaleriaAllService } from 'src/app/apis/galeria/galeria-all.service';
import { RedesAllService } from 'src/app/apis/redes/redes-all.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  apps = false;
  body:any;
  body_galeria:any;
  constructor(
    private _ApiRedes: RedesAllService,
    private _ApiGaleria: GaleriaAllService
  ) { }

  ngOnInit(): void {
    this.MostrarRedes();
    this.MostrarGalerias();
  }

  MostrarRedes(){
    this._ApiRedes.ALL('?id=ALL').subscribe((data) => {
      this.body = data.body.content;
    });
  }

  MostrarGalerias(){
    this._ApiGaleria.ALL('?id=ALL').subscribe((data) => {
      this.body_galeria = data.body.content;
    });
  }

}
