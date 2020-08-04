import { EntityMetadataMap, DefaultDataServiceConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  UserData: {},
  ArticleData: {},
};

// because the plural of "hero" is not "heros"
// const pluralNames = { Hero: 'Heroes' };

export const entityConfig = {
  entityMetadata,
  // pluralNames,
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000/api',
};
