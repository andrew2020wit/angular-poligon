import { IArticle } from './../../../interfaces/IArticle';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class ArticleDataService extends EntityCollectionServiceBase<IArticle> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('ArticleData', serviceElementsFactory);
  }
}
