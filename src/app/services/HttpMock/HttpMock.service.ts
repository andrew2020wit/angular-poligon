import { IUser } from '@app/interfaces/IUser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArticle } from '@app/interfaces/IArticle';

@Injectable({
  providedIn: 'root',
})
export class HttpMockService {
  httpAddressUsers = 'https://jsonplaceholder.typicode.com/users';
  httpAddressUsersMock = 'assets/users.data.json';
  httpAddressArticlesMock = 'assets/articles.data.json';

  constructor(private httpClient: HttpClient) {}
  getUsers() {
    // return this.httpClient.get<IUser[]>(this.httpAddressUsers);
    return this.httpClient.get<IUser[]>(this.httpAddressUsersMock);
  }
  getArticles() {
    return this.httpClient.get<IArticle[]>(this.httpAddressArticlesMock);
  }
}
