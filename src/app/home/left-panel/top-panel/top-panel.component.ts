import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatabaseBarService} from '../../../_services/database-bar.service';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css']
})
export class TopPanelComponent implements OnInit {
  @Input() topPanelData: any[] = [];
  @Output() myEvent = new EventEmitter();

  topPanelm:any
  topPanelDataY:any
  topPanelmWidth:any
  topPanelmHeigth:any
  selectedRow:any;

  constructor(private dbService: DatabaseBarService) {}

  ngOnInit(): void {
    this.getTopPanel();
  }

  getTopPanel() {
    this.dbService.getTopPanel().subscribe(data => {
      this.topPanelmWidth = data[0].width;
      this.topPanelmHeigth = data[0].height;
    },
    err => {
      throw err;
    });
  }

  findCurrentRow(listItem:any){
    this.selectedRow = listItem;
    this.myEvent.emit(listItem);
  }

}
