import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { NoticiasComponent } from './modules/noticias/noticias.component';
import { NoticiaGetComponent } from './modules/noticia-get/noticia-get.component';
import { GobiernoGetComponent } from './modules/gobierno-get/gobierno-get.component';
import { GobiernoComponent } from './modules/gobierno/gobierno.component';
import { BiografiaComponent } from './modules/biografia/biografia.component';
import { HomeAdminComponent } from './modules/admin/home-admin/home-admin.component';
import { EditarHomeComponent } from './modules/admin/home-admin/crud/editar-home/editar-home.component';
import { BiografiaAdminComponent } from './modules/admin/biografia-admin/biografia-admin.component';
import { EditarBioComponent } from './modules/admin/biografia-admin/crud/editar-bio/editar-bio.component';
import { GobiernoAdminComponent } from './modules/admin/gobierno-admin/gobierno-admin.component';
import { GobiernoCreateComponent } from './modules/admin/gobierno-admin/crud/gobierno-create/gobierno-create.component';
import { GobiernoDeleteComponent } from './modules/admin/gobierno-admin/crud/gobierno-delete/gobierno-delete.component';
import { GobiernoUpdateComponent } from './modules/admin/gobierno-admin/crud/gobierno-update/gobierno-update.component';
import { NoticiasCreateComponent } from './modules/admin/noticias-admin/crud/noticias-create/noticias-create.component';
import { NoticiasDeleteComponent } from './modules/admin/noticias-admin/crud/noticias-delete/noticias-delete.component';
import { NoticiasUpdateComponent } from './modules/admin/noticias-admin/crud/noticias-update/noticias-update.component';
import { NoticiasAdminComponent } from './modules/admin/noticias-admin/noticias-admin.component';
import { CrudMeComponent } from './modules/admin/home-admin/crud-me/crud-me.component';
import { CrudEditarComponent } from './modules/admin/home-admin/crud-editar/crud-editar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quien-soy', component: BiografiaComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'noticias/noticia/:id', component: NoticiaGetComponent },
  { path: 'gobiernos', component: GobiernoComponent },
  { path: 'gobiernos/gobierno/:id', component: GobiernoGetComponent },
  /* Admin */
  { path: 'admin/home', component: HomeAdminComponent },
  { path: 'admin/home/editar', component: EditarHomeComponent },
  { path: 'admin/home/me/editar', component: CrudMeComponent },
  { path: 'admin/home/video/editar/:id', component: CrudEditarComponent },
  /*  */
  { path: 'admin/quiensoy', component: BiografiaAdminComponent },
  { path: 'admin/quiensoy/editar', component: EditarBioComponent },
  /*  */
  { path: 'admin/gobierno', component: GobiernoAdminComponent},
  { path: 'admin/gobierno/crear', component: GobiernoCreateComponent},
  { path: 'admin/gobierno/editar/:id', component: GobiernoUpdateComponent},
  { path: 'admin/gobierno/eliimnar/:id', component: GobiernoDeleteComponent},
  /*  */
  { path: 'admin/noticias', component: NoticiasAdminComponent},
  { path: 'admin/noticias/crear', component: NoticiasCreateComponent},
  { path: 'admin/noticias/editar/:id', component: NoticiasUpdateComponent},
  { path: 'admin/noticias/eliimnar/:id', component: NoticiasDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
