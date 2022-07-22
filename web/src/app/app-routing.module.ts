import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './sharedModule/notfound/notfound.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    loadChildren: () => import('./listModule/list.module').then(m => m.ListModule)
  },
  {
    path:"**",
    component: NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
