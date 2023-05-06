import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemAddFormComponent } from './item-add-form/item-add-form.component';
import { ItemListComponent } from './item-list/item-list.component';

const appRoutes:Routes = [
  {path:'',component: ItemListComponent},
  {path: 'add', component: ItemAddFormComponent},


]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
