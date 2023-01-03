import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
public businessdisplay:any = [];
  constructor(private busservice:ApiserviceService ) { }

  ngOnInit(): void {

    this.busservice.business().subscribe((result)=> {
      this.businessdisplay = result.articles;
    })
  }

}
