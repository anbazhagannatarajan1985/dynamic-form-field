import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {

  constructor() { }

  @Input() field: any = {};
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.field.name].valid;
  }

  get isDirty() {
    return this.form.controls[this.field.name].dirty;
  }

  ngOnChange() {
    console.log(this.field.value);
    // this.field.value.
  }

}
