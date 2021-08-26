import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { InstructorService } from 'src/app/services/api/rn_instructor.service';
import { Teacher } from '../Teacher';
import { TeacherService } from 'src/app/services/api/teacher.service';

@Component({
    selector: 'readonly-teacher',
    templateUrl: './readonly-teacher.component.html',
    styleUrls: ['./readonly-teacher.scss'],
})
export class ReadOnlyTeacherComponent implements OnInit {
    basic: boolean = false;
    id: number;
    teacher: Teacher;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private teacherService: TeacherService) { }
    ngOnInit() {
        this.getById();
    }

    getById() {
        this.teacher = new Teacher();
        this.id = this.route.snapshot.params['h_id'];

        this.teacherService.getById(this.id)
            .subscribe(data => {
                console.log(data);
                this.teacher = data;
            });
    }

    goToWhoColumns() {
        this.basic = !this.basic;
    }

    back() {
        this.router.navigate(['../../all'], { relativeTo: this.route });
    }
}
