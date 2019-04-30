import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NodeConsumeService} from "../node-consume.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id:string='';
  hotelDetails:any;
  constructor(private activatedRoute:ActivatedRoute,private nodeConsumeService:NodeConsumeService) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getDetails();
    });
  }

  ngOnInit() {
  }
  getDetails() {
    console.log(this.id);
    this.nodeConsumeService.getHotelsById(this.id).subscribe((res:Response) => {
      //console.log(res);
      this.hotelDetails = res;
    });
  }
}
