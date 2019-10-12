import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotel-application';

  constructor(private router: Router){}

  search(check_in_date :HTMLInputElement, check_out_date:HTMLInputElement, numberOfGuests: HTMLInputElement) {
    this.router.navigate(["/search-results", { check_in_date : this.formatDate(check_in_date.value), check_out_date:this.formatDate(check_out_date.value)}]);
  }



  private formatDate(check_in_date: string) {
      let dates = check_in_date.split("-");
      return dates[1] + "/" + dates[2] + "/" + dates[0];
  }
}
