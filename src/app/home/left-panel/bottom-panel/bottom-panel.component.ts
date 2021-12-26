import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.css']
})
export class BottomPanelComponent implements OnInit {
 @Input() selectedRow: any;
 @Output() onChangeSeverety = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  rangeSlider(severity:any){
    this.onChangeSeverety.emit(severity);
  }

}
