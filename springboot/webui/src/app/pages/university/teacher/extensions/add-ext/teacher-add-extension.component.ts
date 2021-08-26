import { Component, OnInit, Input } from "@angular/core";
import {
  ControlContainer,
  FormGroup
} from "@angular/forms";

@Component({
  selector: "teacher-add-extension",
  templateUrl: "./teacher-add-extension.component.html",
  styleUrls: ["./extension.scss"],
})
export class TeacherAddExtensionComponent implements OnInit {
  @Input() extensionForm: FormGroup;
  constructor(public controlContainer: ControlContainer) {}
  ngOnInit() {}
}
