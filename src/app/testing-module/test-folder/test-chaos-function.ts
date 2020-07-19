export function chaosFunction( x: any): any {

  if (x === 1) { return 'Some important string'; }
  if (x === 2) { return 'wrong test'; }
  if (x === 3) { return true; }
  if (x === 4) { return ['one', 'two', 'three']; }
  return undefined;

}

