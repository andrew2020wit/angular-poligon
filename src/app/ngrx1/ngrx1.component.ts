import { JsonPlaceholderService } from './../services/json-placeholder.service';
import { IUserJPH } from '@@ngrxStore/JPH/IUserJPH';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ArticlesAction from '@@ngrxStore/articles/articles.actions';
import * as NumberVActions from './ngrx-store/numberV/numberV.actions';
import * as UsersAction from './ngrx-store/users/users.actions';
import { IUsers } from '@@ngrxStore/users/iuser';
import { IArticle } from '@@ngrxStore/articles/iarticle';
import * as rootReducer from './ngrx-store/index';

@Component({
  selector: 'app-ngrx1',
  templateUrl: './ngrx1.component.html',
  styleUrls: ['./ngrx1.component.scss'],
})
export class Ngrx1Component implements OnInit {
  numberV$: Observable<number>;
  users$: Observable<IUsers[]>;
  articles$: Observable<IArticle[]>;
  // usersJPH$: Observable<IUserJPH[]>;
  constructor(
    private store: Store<rootReducer.State>,
    private jsonPlaceholderService: JsonPlaceholderService
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
