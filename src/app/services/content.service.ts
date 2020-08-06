import { Injectable } from '@angular/core';
interface ILink {
  id?: string;
  name: string;
  link: string;
}
interface IBlockLink {
  blockId?: string;
  blockName: string;
  links: ILink[];
}
@Injectable({ providedIn: 'root' })
export class ContentService {
  public blockPages: IBlockLink[] = [
    {
      blockName: 'Bases',
      links: [
        { name: 'Forms: Story', link: '/forms' },
        { name: 'Animations', link: '/animations' },
        { name: 'Flexbox', link: '/flex-boxes' },
        { name: 'Grid Layout', link: '/grid' },
        { name: 'IndexedDB-Log', link: '/indexed-dblog' },
        { name: 'Dinamic Component', link: '/dinamic-component' },
      ],
    },
    {
      blockName: 'RxJS/Ngrx',
      links: [
        { name: 'RxJS', link: '/rx/rx-intro' },
        { name: 'Http: GitHub API', link: '/rx/http' },
        {
          name: 'Http: CRUD',
          link: '/rx/http-json-placeholder',
        },
        { name: 'NgRxView: entity', link: '/ngrx1' },
        { name: 'nest-ngrx', link: '/nest-ngrx' },
      ],
    },
    {
      blockName: 'Material Design',
      links: [
        { name: 'Tables', link: '/demo-material/tables' },
        {
          name: 'GuiTestAreaComponent',
          link: '/demo-material/gui-test-area',
        },
        {
          name: 'Platform-cdk',
          link: '/demo-material/platform-cdk',
        },
      ],
    },
    {
      blockName: 'TempBlock',
      links: [{ name: 'Temp-code', link: '/temp-component' }],
    },
    {
      blockName: 'Archive',
      links: [
        { name: 'Bindings', link: '/bindings' },
        { name: 'test-area', link: '/test-area' },
        { name: 'Parent-Child interaction', link: '/parent' },
        { name: 'Directives', link: '/directives' },
        { name: 'Pipes', link: '/pipes' },
        { name: 'ActivatedRoute', link: '/route2' },
        { name: 'SecretPage', link: '/secret' },
        { name: 'lazy-module', link: '/lazy-module' },
      ],
    },
  ];
}
