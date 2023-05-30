import { Component, OnInit } from '@angular/core';
import { RedesAllService } from 'src/app/apis/redes/redes-all.service';

@Component({
  selector: 'app-redes-admin',
  templateUrl: './redes-admin.component.html',
  styleUrls: ['./redes-admin.component.css', '../admin.styles.css']
})
export class RedesAdminComponent implements OnInit {

  show = false;
  body:any;
  constructor(
    private _ApiRedes: RedesAllService
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarRedes();
  }

  MostrarRedes(){
    this._ApiRedes.ALL('?id=ALL').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;
    });
  }

}
