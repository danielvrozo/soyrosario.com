import { Component, OnInit } from '@angular/core';
import { AllNoticiasService } from 'src/app/apis/noticias/all/all-noticias.service';

@Component({
  selector: 'app-noticias-admin',
  templateUrl: './noticias-admin.component.html',
  styleUrls: ['./noticias-admin.component.css', '../admin.styles.css']
})
export class NoticiasAdminComponent implements OnInit {

  show = false;
  body:any;
  constructor(
    private _Api: AllNoticiasService
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.Mostrar();
  }

  Mostrar(){
    this._Api.ALL_GET_NOTICIAS('?id=ALL').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;
    });
  }
}
