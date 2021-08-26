import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bcf_TechnologyStack } from 'src/app/models/Bcf_TechnologyStack';
import { TechnologyStackService } from 'src/app/services/api/technology-stack.service';

@Component({
  selector: 'app-readonly-technology-stack',
  templateUrl: './readonly-technology-stack.component.html',
  styleUrls: ['./readonly-technology-stack.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ReadonlyTechnologyStackComponent implements OnInit {
  basic: boolean = false;
  id: number;
  technology_stack: Bcf_TechnologyStack;
  constructor(
      private router: Router,
      private route: ActivatedRoute,
       private technologyStackService: TechnologyStackService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getById(this.id);
  }

  getById(id: number) {
    this.technology_stack = new Bcf_TechnologyStack();
    this.technologyStackService.getById(id).subscribe((data) => {
      console.log(data);
      this.technology_stack = data;
    });
  }

  goToWhoColumns() {
    this.basic = !this.basic;
  }

  back() {
    this.router.navigate(["../../all"], { relativeTo: this.route });
  }
}
