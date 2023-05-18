import { Component, OnInit } from '@angular/core';
import { AllGobiernoService } from 'src/app/apis/gobierno/all/all-gobierno.service';
import { FechaLetras } from 'src/app/class/fecha-letras';

@Component({
  selector: 'app-programs-gobierno',
  templateUrl: './programs-gobierno.component.html',
  styleUrls: ['./programs-gobierno.component.css']
})
export class ProgramsGobiernoComponent implements OnInit {

  gobierno:any;
  constructor(
    private _ApiAllPlan: AllGobiernoService,
    private _FechaLetras: FechaLetras
  ) { }

  ngOnInit(): void {
    this.mostrarPlanDeGobierno();
  }

  mostrarPlanDeGobierno(){
    this._ApiAllPlan.ALL_GET_GOBIERNO('?id=ALL').subscribe((data) => {
      this.gobierno = data.body.content;
    });
  }

  getFechaLetas(fecha:any){
    return this._FechaLetras.transform(fecha);
  }
  

}
