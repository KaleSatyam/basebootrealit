import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesNewService } from 'src/app/services/api/sales-new.service';

@Component({
  selector: 'app-readonly-new',
  templateUrl: './readonly-new.component.html',
  styleUrls: ['./readonly-new.component.scss']
})
export class ReadonlyNewComponent implements OnInit {

  basic: boolean = false;
  sales;
  header_id;
  constructor(private route: ActivatedRoute, private service: SalesNewService, private routing: Router) { }

  ngOnInit(): void {
    this.header_id = this.route.snapshot.params['id'];
    this.service.getDataById(this.header_id).subscribe(data => {
      this.sales = data;
      console.log(this.sales);
      
    })
  }

  goToWhoColumns() {
    this.basic = !this.basic;
}

  back() {
    this.routing.navigate(['home/sales-new/all']);
  }

}
