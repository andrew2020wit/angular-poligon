import { HttpMockService } from '@app/services/HttpMock/HttpMock.service';
import { IUser } from '@app/interfaces/IUser';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ArticlesAction from '@ngrxStore/articles/articles.actions';
import * as NumberVActions from './ngrx-store/numberV/numberV.actions';
import * as UsersAction from './ngrx-store/users/users.actions';
import { IArticle } from '@app/interfaces/IArticle';
import * as rootReducer from './ngrx-store/index';

@Component({
  selector: 'app-ngrx1',
  templateUrl: './ngrx1.component.html',
  styleUrls: ['./ngrx1.component.scss'],
})
export class Ngrx1Component implements OnInit {
  numberV$: Observable<number>;
  users$: Observable<IUser[]>;
  articles$: Observable<IArticle[]>;
  // usersJPH$: Observable<IUser[]>;
  constructor(
    private store: Store<rootReducer.State>,
    private jsonPlaceholderService: HttpMockService
  ) {
    this.numberV$ = store.pipe(select(rootReducer.selectNumberV));
    this.users$ = store.pipe(select(rootReducer.selectUsers));
  }
  ngOnInit() {
    this.getUser();
    this.getArticles();
    this.articles$ = this.store.pipe(select(rootReducer.selectArticles));
    this.store.dispatch({ type: '[JPH] getUsers' });
  }
  AddNumberV(delta) {
    this.store.dispatch(NumberVActions.numberVAddAction({ delta }));
  }
  ReserNumberV() {
    this.store.dispatch(NumberVActions.numberVReserAction());
  }
  getUser() {
    this.store.dispatch(UsersAction.getUsers());
  }
  resetUser() {
    this.store.dispatch(UsersAction.deleteUsers());
  }
  getArticles() {
    this.store.dispatch(ArticlesAction.getArticles());
  }
  selectArticlesByUserId(userId) {
    this.articles$ = this.store.pipe(
      select(rootReducer.selectArticlesByIserId, { userId })
    );
  }
}
