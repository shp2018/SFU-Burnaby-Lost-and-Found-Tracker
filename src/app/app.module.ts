import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { itemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SearchPipe } from './search.pipe';
import { ItemAddFormComponent } from './item-add-form/item-add-form.component';
import { RoutingModule } from './routing.module';
import { MapComponent } from './map/map.component';





@NgModule({
  declarations: [
    AppComponent,
    itemComponent,
    ItemListComponent,
    SearchPipe,
    ItemAddFormComponent,

    MapComponent,


  ],
  imports: [

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
