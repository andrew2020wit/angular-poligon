import { IArticle } from './../../interfaces/IArticle';
import { ArticleDataService } from './../ngrx-store/ngrx-data/articles-data.service';
import { IUser } from '../../interfaces/IUser';
import { UserDataService } from '../ngrx-store/ngrx-data/users-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nest-client',
  templateUrl: './nest-client.component.html',
  styleUrls: ['./nest-client.component.scss'],
})
export class NestNgrxClientComponent implements OnInit {
  loadingUsers$: Observable<boolean>;
  users$: Observable<IUser[]>;
  loadingArticles$: Observable<boolean>;
  articles$: Observable<IArticle[]>;

  constructor(
    private userDataService: UserDataService,
    private articleDataService: ArticleDataService
  ) {
    this.users$ = userDataService.entities$;
    this.loadingUsers$ = userDataService.loading$;
    this.articles$ = articleDataService.entities$;
    this.loadingArticles$ = articleDataService.loading$;
  }
  ngOnInit() {
    this.getUsers();
    this.getArticles();
  }

  addUser(user: IUser) {
    this.userDataService.add(user);
  }

  deleteUser(user: IUser) {
    this.userDataService.delete(user.id);
  }

  getUsers() {
    this.userDataService.getAll();
  }
  getArticles() {
    this.articleDataService.getAll();
  }

  updateUser(user: IUser) {
    this.userDataService.update(user);
  }
}
