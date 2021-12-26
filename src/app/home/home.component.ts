import { Component, OnInit } from '@angular/core';
import { DatabaseBarService} from '../_services/database-bar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  defects:any
  constructor(private dbService: DatabaseBarService) {}
  ngOnInit(): void {
    this.getDefects();
  }

  getDefects() {
    this.dbService.getDefects().subscribe(data => {
      this.defects = data;

    },
    err => {
      throw err;
    });
  }
}
