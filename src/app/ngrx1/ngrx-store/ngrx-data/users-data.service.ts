import { IUser } from './../../../interfaces/IUser';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class UserDataService extends EntityCollectionServiceBase<IUser> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('UserData', serviceElementsFactory);
  }
}
