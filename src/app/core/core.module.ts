import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MaterialModule } from 'src/app/material/material.module'


@NgModule({
  declarations: [TopNavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    
  ],
  exports: [TopNavComponent]

})
export class CoreModule { }
