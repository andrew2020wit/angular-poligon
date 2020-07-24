import { Injectable } from '@angular/core';
interface ILink {
  id: string;
  name: string;
  link: string;
}
interface IBlockLink {
  blockId: string;
  blockName: string;
  links: ILink[];
}
@Injectable({ providedIn: 'root' })
export class ContentService {
  public blockPages: IBlockLink[] = [
    {
      blockId: '1b',
      blockName: 'Bases',
      links: [
        { id: '1b1', name: 'Forms: Story', link: '/forms' },
        { id: 'animations', name: 'Animations', link: '/animations' },
        { id: 'flexboxes', name: 'Flexbox', link: '/flex-boxes' },
        { id: 'grid', name: 'Grid Layout', link: '/grid' },
        { id: 'indexeddblog', name: 'IndexedDB-Log', link: '/indexed-dblog' },
        { id: 'ngrx1', name: 'ngrx1', link: '/ngrx1' },
        /*         {
          id: 'ngrxusersarticles',
          name: 'ngrx-users-articles',
          link: '/ngrx-users-articles',
        }, */
      ],
    },
    {
      blockId: '3b',
      blockName: 'RxJS',
      links: [
        { id: '3b1', name: 'RxJS', link: '/rx/rx-intro' },
        { id: '3b4', name: 'Http: GitHub API', link: '/rx/http' },
        {
          id: 'httpjsonplaceholder',
          name: 'Http: CRUD',
          link: '/rx/http-json-placeholder',
        },
      ],
    },
    {
      blockId: '4b',
      blockName: 'Material Design',
      links: [
        { id: '4b2', name: 'Tables', link: '/demo-material/tables' },
        {
          id: '4b3',
          name: 'GuiTestAreaComponent',
          link: '/demo-material/gui-test-area',
        },
        {
          id: 'platformcdk',
          name: 'Platform-cdk',
          link: '/demo-material/platform-cdk',
        },
      ],
    },
    {
      blockId: '8b',
      blockName: 'TempBlock',
      links: [{ id: '1b6', name: 'Temp-code', link: '/temp-component' }],
    },
    {
      blockId: '9b',
      blockName: 'Archive',
      links: [
        { id: 'bindings', name: 'Bindings', link: '/bindings' },
        { id: 'test-area', name: 'test-area', link: '/test-area' },
        { id: 'parent', name: 'Parent-Child interaction', link: '/parent' },
        { id: 'directives', name: 'Directives', link: '/directives' },
        { id: 'pipes', name: 'Pipes', link: '/pipes' },
        { id: 'route2', name: 'ActivatedRoute', link: '/route2' },
        { id: 'secret', name: 'SecretPage', link: '/secret' },
      ],
    },
  ];
}
