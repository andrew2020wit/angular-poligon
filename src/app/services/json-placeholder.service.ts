import { IUserJPH } from '@@ngrxStore/JPH/IUserJPH';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  httpAddressJPH = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {}
  getUsers() {
    return this.httpClient.get<IUserJPH[]>(`${this.httpAddressJPH}/users`);
  }
}
