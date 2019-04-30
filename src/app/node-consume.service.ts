import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NodeConsumeService {

  constructor(private http:Http) {}

  getHotels(search:string,limit:string){
    return this.http.get('http://localhost:3000/hotelList/'+search+'/'+limit).map((response) => response.json());
  }

  getHotelsById(id:string){
    return this.http.get('http://localhost:3000/hotelList/id/'+id).map((response) => response.json());
  }
  bookHotel(bookhotel:string){
   let  url = "http://localhost:3000/saveHotel";
   const headers = new Headers();    
   headers.append('Content-Type','application/x-www-form-urlencoded');
   console.log("service:"+bookhotel);
   let bookHotelJson = JSON.parse(bookhotel);
   console.log(bookHotelJson);
   return this.http.post(url, {data:bookHotelJson,headers: headers}).map((response) => response.json());
  }
}
