import { Injectable } from '@angular/core';
import { ILogItem } from '../interfaces/ILogItem';
/*Demo IndexedDB*/
@Injectable({
  providedIn: 'root',
})
export class IndexedDBService {
  indexedDatabaseName = 'testIDBAngularPoligon';
  indexedDatabaseVersion = 1;
  openRequest: IDBOpenDBRequest;
  testIDB: IDBDatabase;
  logMessages: ILogItem[] = [];
  constructor() {
    this.openRequestF();
  }
  openRequestF() {
    this.openRequest = indexedDB.open(
      this.indexedDatabaseName,
      this.indexedDatabaseVersion
    );
    this.openRequest.onerror = () => {
      console.error('indexedDB: openRequest.onerror', this.openRequest.error);
    };
    this.openRequest.onupgradeneeded = () => {
      this.testIDB = this.openRequest.result;
      if (!this.testIDB.objectStoreNames.contains('logs')) {
        this.testIDB.createObjectStore('logs', { autoIncrement: true });
      }
    };
    this.openRequest.onsuccess = () => {
      this.testIDB = this.openRequest.result;
      this.testIDB.onversionchange = () => {
        this.testIDB.close();
        alert('DataBase is too old, need reload.');
      };
    };
    this.openRequest.onblocked = () => {
      alert('testIDB onblocked');
      console.error('testIDB onblocked');
    };
  }
  deleteTestIDB() {
    const deleteRequest = indexedDB.deleteDatabase(this.indexedDatabaseName);
    deleteRequest.onerror = () => {
      console.log('error deleteDatabase');
    };
    deleteRequest.onsuccess = () => {
      console.log('deleteDatabase done');
    };
  }
  addLogMessage(message: ILogItem) {
    const transaction = this.testIDB.transaction('logs', 'readwrite');
    const logs = transaction.objectStore('logs');
    if (!message.colorBG) {
      message.colorBG = 'white';
    }
    if (!message.data) {
      message.data = new Date();
    }
    const request = logs.add(message);
    request.onsuccess = () => {
      console.log('message added', request.result);
    };
    request.onerror = () => {
      console.log('error message not added', request.error);
    };
  }
  getAllLogMessages() {
    const transaction = this.testIDB.transaction('logs');
    const logs = transaction.objectStore('logs');
    const res = logs.getAll();
    res.onsuccess = (event) => {
      const targ = event.target as IDBRequest;
      this.logMessages = targ.result as ILogItem[];
    };
    res.onerror = () => {
      console.log('error getAllLogMessages', res.error);
    };
  }
}
