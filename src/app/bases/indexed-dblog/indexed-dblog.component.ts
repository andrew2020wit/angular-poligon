import {AfterViewInit, Component, OnInit} from '@angular/core';
import {IndexedDBService} from '../../indexed-db.service';

@Component({
  selector: 'app-indexed-dblog',
  templateUrl: './indexed-dblog.component.html',
  styleUrls: ['./indexed-dblog.component.scss']
})
export class IndexedDBLogComponent implements OnInit, AfterViewInit {

  constructor( public indexedDBService: IndexedDBService) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout( () => {this.getMessages(); }, 0);
  }

  getMessages(){
    this.indexedDBService.getAllLogMessages();
  }




}
