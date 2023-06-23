import { Component, OnInit } from '@angular/core';
import { MaterialesService } from 'src/app/apis/materiales/materiales.service';
import { RedirecLogin } from 'src/app/class/redirect';

@Component({
  selector: 'app-materiales-admin',
  templateUrl: './materiales-admin.component.html',
  styleUrls: ['./materiales-admin.component.css', '../admin.styles.css']
})
export class MaterialesAdminComponent implements OnInit {

  show = false;
  body:any;

  constructor(
    private _ApiMaterials: MaterialesService,
    private _VerificarLogin: RedirecLogin
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarMateriales();

    this.VerificarLogin();
  }

  VerificarLogin(){
    this._VerificarLogin.IsLogin();
  }

  MostrarMateriales(){
    this._ApiMaterials.GET('?id=1').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;
    });
  }
}