import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ILogItem } from '../../interfaces/ILogItem';

/*export interface ILogItem {
  data?: Date;
  source: string;
  message: string;
  colorBG?: string;
  id?: number;
}*/

@Component({
  selector: 'app-log-box',
  templateUrl: './log-box.component.html',
  styleUrls: ['./log-box.component.scss'],
})
export class LogBoxComponent implements OnInit {
  displayedColumns: string[] = ['id', 'data', 'source', 'message'];
  data: ILogItem[] = [];
  dataSource = new MatTableDataSource(this.data);

  constructor() {}

  ngOnInit(): void {}

  public add(newItem: ILogItem) {
    // console.log('add');

    newItem.id = this.data.length;

    if (!newItem.data) {
      newItem.data = new Date();
    }
    if (!newItem.colorBG) {
      newItem.colorBG = '#eee';
    }

    this.data.push(newItem);
    this.dataSource.data = this.data;
  }

  clearLogs() {
    this.data = [];
    this.dataSource.data = this.data;
  }

  applyFilter($keyUp: KeyboardEvent) {
    const filterValue = ($keyUp.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  testAdd() {
    // console.log('testAdd');
    this.add({
      source: 'LogBox',
      message: 'testAdded',
      colorBG: 'green',
    });
  }
}
