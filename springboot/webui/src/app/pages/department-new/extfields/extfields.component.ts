import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormArrayName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-extfields',
  templateUrl: './extfields.component.html',
  styleUrls: ['./extfields.component.scss']
})
export class ExtfieldsComponent implements OnInit {
  @Input() entryForm:FormGroup;

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit(): void {
  }

}
