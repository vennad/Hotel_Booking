import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NodeConsumeService} from "../node-consume.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  id:string='';
  hotelDetails:any;
  hname:string='';
  haddress:string='';
  hlocation:string='';
  hzip:string='';
  bookhotel:any;
  result:any='';
  name:FormControl = new FormControl( '',[Validators.required]);
  address:FormControl = new FormControl( '',[Validators.required]);
  location:FormControl = new FormControl( '',[Validators.required]);
  zip:FormControl = new FormControl( '',[Validators.required]);
  htname:FormControl = new FormControl({value: this.hname, disabled: true});
  htaddrress:FormControl = new FormControl({value: this.haddress, disabled: true});
  htlocation:FormControl = new FormControl({value: this.hlocation, disabled: true});
  htzip:FormControl = new FormControl({value: this.hzip, disabled: true});
  bookingForm:FormGroup = this.formBuilder.group({
    name : this.name,
    address : this.address,
    location : this.location,
    zip : this.zip,
    htname : this.hname,
    htaddress : this.haddress,
    htlocation : this.hlocation,
    htzip : this.hzip
    });
  constructor(private activatedRoute:ActivatedRoute,private nodeConsumeService:NodeConsumeService,private formBuilder:FormBuilder) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getDetails();
    });
  }

  ngOnInit() {
    this.result='';    
  }
  getDetails() {
    this.nodeConsumeService.getHotelsById(this.id).subscribe((res:Response) => {
      console.log(res);
      this.hotelDetails = res;
      for (let hotel of this.hotelDetails) {
        this.hname = hotel.name;
        this.haddress = hotel.address;
        this.hlocation = hotel.location;
        this.hzip = hotel.zip;
      }
    });
  }
  bookHotel() {
    //console.log(this.bookingForm.value);
    //console.log(this.bookingForm.get('name').value);
    this.bookhotel='{"customer":{"name":"'+this.bookingForm.get("name").value+'","address":"'+this.bookingForm.get("address").value+'","location":"'+this.bookingForm.get("location").value+'","zip":"'+this.bookingForm.get("zip").value+'"},"hotel": {"name":"'+this.hname+'","address":"'+this.haddress+'","location":"'+this.hlocation+'","zip":"'+this.hzip+'"}}';
    console.log(this.bookhotel);
    this.nodeConsumeService.bookHotel(this.bookhotel).subscribe((res:Response) => {
      this.result = res;
      console.log(res);
    });    
  }
}
