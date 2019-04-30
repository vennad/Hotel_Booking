import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NodeConsumeService} from "../node-consume.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  search:string='';
  limit:string='';
  hotelList:any;
  constructor(private activatedRoute:ActivatedRoute,private nodeConsumeService:NodeConsumeService) {
    this.activatedRoute.params.subscribe(params => {
      this.search = params['search'];
      this.limit = params['limit'];
      this.getDetails();
    });
  }
  ngOnInit() {
  }
  getDetails() {
    this.nodeConsumeService.getHotels(this.search,this.limit).subscribe((res:Response) => {
      //console.log(res);
      this.hotelList = res;
    });
  }
}
