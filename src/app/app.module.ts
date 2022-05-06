import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';
import {MenuPositionExample} from './menu-position-example';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { TeacherComponent } from './teacher/teacher.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [MenuPositionExample, TeacherComponent, FooterComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [MenuPositionExample, TeacherComponent, FooterComponent],
})
export class AppModule {}
