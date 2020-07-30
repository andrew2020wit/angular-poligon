import { IUser } from '@app/interfaces/IUser';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ArticlesAction from '@ngrxStore/articles/articles.actions';
import * as UsersAction from './ngrx-store/users/users.actions';
import { IArticle } from '@app/interfaces/IArticle';
import * as rootReducer from './ngrx-store/index';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-ngrx1',
  templateUrl: './ngrx1.component.html',
  styleUrls: ['./ngrx1.component.scss'],
})
export class Ngrx1Component implements OnInit {
  users$: Observable<IUser[]>;
  articles$: Observable<IArticle[]>;
  allArticles: IArticle[];
  selectedUser$: Observable<number | null>;
  selectedUser: number | null;
  selectedArticle$: Observable<number | null>;
  selectedArticle: number | null;
  visibleArticles: IArticle[];
  currentArticle: IArticle;
  currentArticleText = '';

  constructor(private store: Store<rootReducer.State>) {
    this.users$ = store.pipe(select(rootReducer.selectAllUsers));
    this.articles$ = store.pipe(select(rootReducer.selectAllArticles));
    this.selectedUser$ = store.pipe(select(rootReducer.selectCurrentUserId));
    this.selectedArticle$ = store.pipe(
      select(rootReducer.selectCurrentArticleId)
    );

    this.articles$.subscribe((value) => {
      this.allArticles = value;
      this.selectAllUser();
    });
    this.selectedUser$.subscribe((n) => {
      if (n) {
        this.visibleArticles = this.allArticles.filter((article, index) => {
          return article.authorId === n;
        });
      } else {
        this.visibleArticles = this.allArticles;
      }
      this.selectedUser = n;
    });
    this.selectedArticle$.subscribe((n) => (this.selectedArticle = n));
    this.selectedArticle$.subscribe((n) => {
      if (n) {
        const art = this.allArticles.find(
          (art1) => art1.id === this.selectedArticle
        );
        this.currentArticleText = art.text;
      } else {
        this.currentArticleText = '';
      }
    });
    this.loadUsers();
    this.loadArticles();
    // this.users$.subscribe(() => {
    //   this.selectUser(1);
    //   this.selectUser(null);
    // });
  }

  ngOnInit() {}
  loadUsers() {
    this.store.dispatch({ type: '[EntityStore] loadUsers' });
  }
  loadArticles() {
    this.store.dispatch({ type: '[EntityStore] loadArticles' });
  }
  selectUser(id: number | null) {
    this.store.dispatch({ type: '[EntityStore] selectedUser', id });
  }
  selectArticle(id: number) {
    this.store.dispatch({ type: '[EntityStore] selectedArticle', id });
  }
  selectAllUser() {
    this.selectUser(1);
    this.selectUser(null);
  }
}
