import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  constructor() { }

  @Input() field: any = {};
  @Input() form: FormGroup;


}
