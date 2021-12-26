import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  @Input() leftPanelData: any[] = [];
  selected = false;;
  selectedRow:any;
  selectedRowArr: any[] = [];
  constructor() { }

  ngOnInit(): void {
    
  }

  markSelectedRow(selected:any){
    this.selectedRow = selected;
    this.selectedRowArr.push(selected);
  }

  myEvent($event:any){
    this.selectedRow = $event;
  }

  onChangeSeverety(severity:any){
    this.selectedRow.severity = severity;
  }

}
