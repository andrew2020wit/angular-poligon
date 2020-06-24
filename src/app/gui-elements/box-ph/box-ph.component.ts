import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-box-ph',
  templateUrl: './box-ph.component.html',
  styleUrls: ['./box-ph.component.scss']
})
export class BoxPhComponent implements OnInit {

  // @Input() text = 'Place holder box';

  @Input() widthBoxPx = 200;
  @Input() heightBoxPx = 100;
  @Input() backgroundColor = '#EEE';
  @Input() backgroundColor2 = 'white';

  constructor() { }

  ngOnInit(): void {
  }

}
