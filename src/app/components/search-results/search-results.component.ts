import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelSearchService } from 'src/app/services/hotel-search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  hotelData: any;

  constructor(private route: ActivatedRoute, private hotelSearchService: HotelSearchService) {
    debugger;
    let check_in_date = this.route.snapshot.paramMap.get("check_in_date");
    let check_out_date = this.route.snapshot.paramMap.get("check_out_date");

    if(localStorage.getItem('session-id') === null) {
      this.hotelSearchService.createSession(check_in_date,check_out_date)
      .subscribe(session => {
        localStorage.setItem('session-id',session.sessionId);
        this.hotelSearchService.getResults().subscribe(hotelData => this.hotelData= hotelData);
      })
    } else {
      this.hotelSearchService.getResults().subscribe(hotelData => this.hotelData= hotelData);
    }
  }

  ngOnInit() {
  }

}
