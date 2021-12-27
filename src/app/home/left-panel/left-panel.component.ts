import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  @Input() leftPanelData: any[] = [];
  @Input() selectedRow: any;
  @Output() selectRowOnDotSelection = new EventEmitter();

  selected = false;;
  selectedRowArr: any[] = [];
  constructor() {  }

  ngOnInit(): void {
    
  }

  markSelectedRow(selected:any){
    this.selectedRow = selected;
    this.selectedRowArr=[selected];
    this.selectRowOnDotSelection.emit(selected);
  }

  myEvent($event:any){
    this.selectedRow = $event;
  }

  onChangeSeverety(severity:any){
    this.selectedRow.severity = severity;
  }

}
