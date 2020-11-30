import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { UserRoutingModule } from './user-routhing.module';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    BrowserModule
  ]
})
export class UserModule { }
