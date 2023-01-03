import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
 public topheadingdisplay:any = [];

  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {

    this.service.topheading().subscribe((data)=>{
     this.topheadingdisplay= data.articles;
    // console.log(data);   
    })

   
  }

}
