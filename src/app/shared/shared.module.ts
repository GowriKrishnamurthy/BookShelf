import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { ConvertCharToSpacePipe } from './convert-char-to-space.pipe';

@NgModule({
  declarations: [
    StarComponent,
    ErrorComponent,
    ConvertCharToSpacePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StarComponent,
    ErrorComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
