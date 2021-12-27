import { Component, OnInit } from '@angular/core';
import { Traveller } from 'src/app/interfaces/interfaces';
import { TravellersService } from 'src/app/services/travellers.service';

@Component({
  selector: 'app-travellers-list',
  templateUrl: './travellers-list.component.html',
  styleUrls: ['./travellers-list.component.scss']
})
export class TravellersListComponent implements OnInit {

  constructor(private _travellersService: TravellersService) { }
  travellersData: Traveller[] = [];

  ngOnInit(): void {
    this._travellersService.getTravellersList().subscribe(
      res => {
        this.travellersData = res.result.travellers;
      },
      err => alert(err.error.message)
    )
  }

}
