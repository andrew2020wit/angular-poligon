import { IUser } from '@app/interfaces/IUser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpMockService {
  httpAddressJPH = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {}
  getUsers() {
    return this.httpClient.get<IUser[]>(`${this.httpAddressJPH}/users`);
  }
}
