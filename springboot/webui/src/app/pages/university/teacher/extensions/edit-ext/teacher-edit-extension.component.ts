import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from "@angular/core";

import { TeacherService } from "src/app/services/api/teacher.service";
import { Teacher } from "../../Teacher";

@Component({
  selector: "teacher-edit-extension",
  templateUrl: "./teacher-edit-extension.component.html",
  styleUrls: [ './teacher-edit-extension.scss'],
})
export class TeacherEditExtensionComponent implements OnInit {
  
  @Input() teacherExtension;

  @Output() teacherExtensionChange = new EventEmitter();
    
  change(newValue) {
      console.log('newvalue', newValue)
      this.teacherExtension = newValue;
      this.teacherExtensionChange.emit(this.teacherExtension);
    }
  constructor(private teacherService: TeacherService) {}
  ngOnInit() {
  }




}
