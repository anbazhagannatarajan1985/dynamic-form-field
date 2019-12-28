import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {

  constructor() { }

  @Input() field: any = {};
  @Input() form: FormGroup;

}
