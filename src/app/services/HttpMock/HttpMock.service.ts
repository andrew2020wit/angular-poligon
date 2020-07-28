import { IUser } from '@app/interfaces/IUser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpMockService {
  httpAddressUsers = 'https://jsonplaceholder.typicode.com/users';
  httpAddressUsersMock = 'assets/users.data.json';

  constructor(private httpClient: HttpClient) {}
  getUsers() {
    // return this.httpClient.get<IUser[]>(this.httpAddressUsers);
    return this.httpClient.get<IUser[]>(this.httpAddressUsersMock);
  }
}
