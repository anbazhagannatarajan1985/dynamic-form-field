import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { TextboxComponent } from './fields/textbox/textbox.component';
import { CheckboxComponent } from './fields/checkbox/checkbox.component';
import { RadioComponent } from './fields/radio/radio.component';
import { DropdownComponent } from './fields/dropdown/dropdown.component';
import { FileComponent } from './fields/file/file.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],

  declarations: [
    TextboxComponent,
    CheckboxComponent,
    RadioComponent,
    DropdownComponent,
    FileComponent,
    FieldBuilderComponent,
    DynamicFormBuilderComponent,
  ],

  exports: [
    DynamicFormBuilderComponent
  ],

  providers: []

})
export class DynamicFormBuilderModule { }
